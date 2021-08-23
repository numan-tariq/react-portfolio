import React from "react";
import { Row, Col } from "antd";

const Steps = () => {
  return (
    <Row style={{ marginLeft: 120, marginTop: 100 }}>
      <Col span={8}>
        <img src="step-1.png" alt="step1"></img>
        <p style={{ marginLeft: 100, fontSize: 19, fontWeight: "bold" }}>
          1. Research
        </p>
        <Col xs={6} sm={6} md={6} lg={10} xl={14}>
          <p style={{ textAlign: "center" }}>
            We work with you to understand user’s stories and validate your idea
            with real users using lean design sprints.
          </p>
        </Col>
      </Col>
      <Col span={8}>
        <img src="step-2.png" alt="step2"></img>
        <p style={{ marginLeft: 110, fontSize: 19, fontWeight: "bold" }}>
          2. Design
        </p>
        <Col xs={6} sm={6} md={6} lg={10} xl={14}>
          <p style={{ textAlign: "center" }}>
            Expanding on the insights gained, you’ll work closely with our
            design team to create an elegant design
          </p>
        </Col>
      </Col>
      <Col span={8}>
        <img src="step-3.png" alt="step3"></img>
        <p style={{ marginLeft: 110, fontSize: 19, fontWeight: "bold" }}>
          3. Build
        </p>
        <Col xs={6} sm={6} md={6} lg={10} xl={15}>
          <p style={{ textAlign: "center" }}>
            With our scrum-based agile methodology, you’ll receive iterative
            builds every two weeks, which gives you
          </p>
        </Col>
      </Col>
    </Row>
  );
};

export default Steps;
