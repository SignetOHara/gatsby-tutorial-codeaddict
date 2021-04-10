import React from "react";

// import classes from "../Form.module.scss";

const FirstPage = ({
  setFormStep,
  register,
  errors,
  isDirty,
  isValid,
  getValues,
}) => {
  const clickHandler = () => {
    if (
      errors.name ||
      errors.email ||
      errors.enrolleeName ||
      errors.enrolleeAge ||
      errors.mobileNumber ||
      getValues("name") === "" ||
      getValues("email") === "" ||
      getValues("enrolleeName") === "" ||
      getValues("enrolleeAge") === "" ||
      getValues("mobileNumber") === ""
    ) {
      console.log(errors);
    } else {
      setFormStep(1);
    }
  };

  return (
    <section >
      <div >
        <label htmlFor="name">
          Your name
          <input
            style={{
              border: errors.name ? "2px solid red" : "1px solid black",
            }}
            type="text"
            defaultValue=""
            {...register("name", { required: "* Please enter your name." })}
            id="name"
          />
          {errors.name && (
            <span aria-live="polite" >
              {errors.name.message}
            </span>
          )}
        </label>
      </div>
      <div >
        <label htmlFor="email">
          Your email
          <input
            style={{
              border: errors.email ? "2px solid red" : "1px solid black",
            }}
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            id="email"
          />
          {errors.email && errors.email.type === "required" && (
            <span aria-live="polite" >
              * Please enter your email.
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span aria-live="polite" >
              * Please enter a valid email.
            </span>
          )}
        </label>
      </div>
      <div >
        <label htmlFor="enrolleeName">
          Please enter the name of your enrollee
          <input
            style={{
              border: errors.enrolleeName ? "2px solid red" : "1px solid black",
            }}
            type="text"
            {...register("enrolleeName", {
              required: "* Please enter the enrollee's name.",
            })}
            id="enrolleeName"
          />
          {errors.enrolleeName && (
            <span aria-live="polite" >
              {errors.enrolleeName.message}
            </span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="enrolleeAge" >
          Please enter the age of your enrollee
          <input
            style={{
              border: errors.enrolleeAge ? "2px solid red" : "1px solid black",
            }}
           
            type="number"
            {...register("enrolleeAge", {
              valueAsNumber: true,
              required: true,
              min: 3,
            })}
            id="enrolleeAge"
            min="3"
          />
          {errors.enrolleeAge && errors.enrolleeAge.type === "required" ? (
            <span aria-live="polite" >
              * Please enter the age of enrollee.
            </span>
          ) : errors.enrolleeAge && errors.enrolleeAge.type === "min" ? (
            <span
              aria-live="polite"
              
            >
              * The minimum age for Dance is 3. The minimum age for Music is 4.
            </span>
          ) : (
            <span >
              * For Dance the minimum age is 3; for Music the minumum age is 4.
            </span>
          )}
        </label>
      </div>
      <div >
        <label htmlFor="mobileNumber" >
          Your contact number
          <input
           
            style={{
              border: errors.mobileNumber ? "2px solid red" : "1px solid black",
            }}
            type="text"
            {...register("mobileNumber", {
              required: "* Please enter your mobile number.",
              pattern: /^(09|\+639)\d{9}$/,
            })}
            id="mobileNumber"
          />
          {errors.mobileNumber && errors.mobileNumber.type === "required" ? (
            <span aria-live="polite">
              * Please enter your mobile number.
            </span>
          ) : errors.mobileNumber && errors.mobileNumber.type === "pattern" ? (
            <span
              aria-live="polite"
            
            >
              * Please enter your mobile as follows: 09xxxxxxxxx or
              +639xxxxxxxxx.
            </span>
          ) : (
            <span>
              * Please enter your mobile as follows: 09xxxxxxxxx or
              +639xxxxxxxxx.
            </span>
          )}
        </label>
      </div>
      <div >
        <button
  
          type="button"
          onClick={clickHandler}
          disabled={!isDirty || !isValid}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default FirstPage;
