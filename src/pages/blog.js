import React from "react";
import Layout from "../components/layout";
import styles from "../components/blog.module.css";

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is a blog page</h1>
        <p className={styles.text}>
          It is further against us that we are not, in the strictest sense,
          specialists in the fields which came primarily to be concerned. As a
          geologist my object in leading the Miskatonic University Expedition
          was wholly that of securing deep-level specimens of rock and soil from
          various parts of the antarctic continent, aided by the remarkable
          drill devised by Prof. Frank H. Pabodie of our engineering department.
          I had no wish to be a pioneer in any other field than this; but I did
          hope that the use of this new mechanical appliance at different points
          along previously explored paths would bring to light materials of a
          sort hitherto unreached by the ordinary methods of collection.
          Pabodie’s drilling apparatus, as the public already knows from our
          reports, was unique and radical in its lightness, portability, and
          capacity to combine the ordinary artesian drill principle with the
          principle of the small circular rock drill in such a way as to cope
          quickly with strata of varying hardness. Steel head, jointed rods,
          gasoline motor, collapsible wooden derrick, dynamiting paraphernalia,
          cording, rubbish-removal auger, and sectional piping for bores five
          inches wide and up to 1000 feet deep all formed, with needed
          accessories, no greater load than three seven-dog sledges could carry;
          this being made possible by the clever aluminum alloy of which most of
          the metal objects were fashioned. Four large Dornier aëroplanes,
          designed especially for the tremendous altitude flying necessary on
          the antarctic plateau and with added fuel-warming and quick-starting
          devices worked out by Pabodie, could transport our entire expedition
          from a base at the edge of the great ice barrier to various suitable
          inland points, and from these points a sufficient quota of dogs would
          serve us.
        </p>
      </div>
    </Layout>
  );
};

export default blog;
