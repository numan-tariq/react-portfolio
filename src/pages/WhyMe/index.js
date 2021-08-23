import React from "react";
import Steps from "../../components/Steps";
import Description from "../../components/Description";

function WhyMe() {
  return (
    <>
      <div style={{ marginLeft: 70, marginTop: 100, textAlign: "center" }}>
        <h1>From Lean Design Sprints to Agile Development</h1>
        <p>Our process is designed to give you the best shot at success.</p>
      </div>
      <Steps />
      <Description />
    </>
  );
}

export default WhyMe;
