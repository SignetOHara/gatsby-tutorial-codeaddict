import React, { useState } from "react";
import { useForm } from "react-hook-form";

import FirstPage from "./Steps/FirstPage";
import Courses from "./Steps/Courses";
import LastPage from "./Steps/LastPage";
import Success from "./Steps/Success";
// import classes from "./Form.module.scss";

const MainForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({ mode: "onTouched" });

  const [formStep, setFormStep] = useState(0);

  const props = {
    setFormStep,
    register,
    errors,
    isDirty,
    isValid,
    getValues,
    watch,
  };

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // }

  // const submitHandler = data => {
  //   if (
  //     (data.HowDidTheyKnow === null ||
  //       data.HowDidTheyKnow === undefined ||
  //       data.HowDidTheyKnow === false) &&
  //     (data.other === undefined || data.other === null || data.other === "")
  //   ) {
  //     alert("Please choose one option or complete Other field");
  //   } else {
  //     // Send to Netlify Here
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({
  //         "form-name": event.target.getAttribute("name"),
  //         ...name,
  //       }),
  //     })
  //       .then(() => setFormStep(3))
  //       .catch(error => alert(error));
  //   }
  // };

  return (
    <form
      name="Contact Form"
      data-netlify="true"
      // onSubmit={handleSubmit(submitHandler)}
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact Form" />
      {/* Add logo here when using in main B&S site */}
      <h2>Beats &amp; Steps Enrollment Form</h2>
      {formStep === 0 && <FirstPage {...props} />}
      {formStep === 1 && <Courses {...props} />}
      {formStep === 2 && <LastPage {...props} />}
      {formStep === 3 && <Success />}
    </form>
  );
};

export default MainForm;
