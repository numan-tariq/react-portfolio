import React from "react";
import EducationCard from "../../components/EducationCard";
import { Row, Space } from "antd";

function Education() {
  return (
    <div style={{ marginLeft: 20, marginTop: 170 }}>
      <Row>
        <Space size={28}>
          <EducationCard
            src="UCP.jpeg"
            title="Bachelor of Science in Computer Science (BSCS)"
            description="University of Central Punjab | October 2017 -  July 2021"
          />
          <EducationCard
            src="PGC.jpeg"
            title="Intermediate of Computer Science (ICS)"
            description="Punjab Group of Colleges | September 2015 -  April 2017"
          />
          <EducationCard
            src="AS.jpeg"
            title="Matriculation"
            description="Allied School | April 2013 - March 2015"
          />
        </Space>
      </Row>
    </div>
  );
}

export default Education;
