import React from "react";

// import classes from "../Form.module.scss";

const Courses = ({ setFormStep, register, getValues, watch }) => {
  const watchAll = watch([
    "ballet",
    "jazz",
    "hiphop",
    "voice",
    "piano",
    "guitar",
    "violin",
  ]);

  const checker = arr => arr.some(e => e === undefined);
  const checkerTwo = arr => arr.every(e => e === false);

  const clickHandler = () => {
    if (
      !getValues("ballet") &&
      !getValues("jazz") &&
      !getValues("hiphop") &&
      !getValues("voice") &&
      !getValues("piano") &&
      !getValues("guitar") &&
      !getValues("violin")
    ) {
      alert("Please select at least one option");
    } else {
      setFormStep(2);
    }
  };

  return (
    <section>
      <div>
        <p>Please select all the courses you are interested in:</p>
        <div>
          <h5>Dance Courses</h5>
          <label htmlFor="ballet">
            <input
              type="checkbox"
              id="ballet"
              {...register("ballet")}
              value="true"
            />
            Ballet
          </label>
          <label htmlFor="jazz">
            <input
              type="checkbox"
              id="jazz"
              {...register("jazz")}
              value="true"
            />
            Jazz
          </label>
          <label htmlFor="hiphop">
            <input
              type="checkbox"
              id="hiphop"
              {...register("hiphop")}
              value="true"
            />
            Hiphop
          </label>
        </div>
        <div>
          <h5>Music Courses</h5>
          <label htmlFor="voice">
            <input
              type="checkbox"
              id="voice"
              {...register("voice")}
              value="true"
            />
            Voice
          </label>
          <label htmlFor="piano">
            <input
              type="checkbox"
              id="piano"
              {...register("piano")}
              value="true"
            />
            Piano
          </label>
          <label htmlFor="guitar">
            <input
              type="checkbox"
              id="guitar"
              {...register("guitar")}
              value="true"
            />
            Guitar
          </label>
          <label htmlFor="violin">
            <input
              type="checkbox"
              id="violin"
              {...register("violin")}
              value="true"
            />
            Violin
          </label>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => setFormStep(0)}>
          Back
        </button>
        <button
          type="button"
          onClick={clickHandler}
          disabled={checker(watchAll) || checkerTwo(watchAll)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Courses;
