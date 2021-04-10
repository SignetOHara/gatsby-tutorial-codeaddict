import React from "react";

// import classes from "../Form.module.scss";

const LastPage = ({ setFormStep, register, watch }) => {
  let other = false;

  if (watch("other")) {
    other = true;
  }

  const checker = watch("HowDidTheyKnow") || other === true;

  return (
    <section >
      <div >
        <div >
          <p>How did your hear about Beats &amp; Steps?</p>
          <label htmlFor="website">
            <input
              type="radio"
              id="website"
              {...register("HowDidTheyKnow")}
              value="website"
            />
            Website
          </label>
          <label htmlFor="facebook">
            <input
              type="radio"
              id="facebook"
              {...register("HowDidTheyKnow")}
              value="facebook"
            />
            Facebook
          </label>
          <label htmlFor="instagram">
            <input
              type="radio"
              id="instagram"
              {...register("HowDidTheyKnow")}
              value="instagram"
            />
            Instagram
          </label>
          <label htmlFor="youtube">
            <input
              type="radio"
              id="youtube"
              {...register("HowDidTheyKnow")}
              value="youtube"
            />
            Youtube
          </label>
          <label htmlFor="friends">
            <input
              type="radio"
              id="friends"
              {...register("HowDidTheyKnow")}
              value="friends"
            />
            Friends or Family
          </label>
          <div >
            <label htmlFor="other">
              Other:
              <input type="text" {...register("other")} id="other" />
            </label>
          </div>
        </div>
      </div>
      <div >
        <button
         
          type="button"
          onClick={() => setFormStep(1)}
        >
          Back
        </button>
        <button type="submit" disabled={!checker}>
          Send
        </button>
      </div>
    </section>
  );
};

export default LastPage;
