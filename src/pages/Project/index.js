import React from "react";
import { Row, Col } from "antd";
import ProjectTabs from "../../components/ProjectTabs";

function Project() {
  return (
    <div style={{ marginLeft: 70, marginTop: 100 }}>
      <Row>
        <Col xs={6} sm={6} md={6} lg={8} xl={10}>
          <h1>Making Idea Come To Life!</h1>
          <p>
            Year after year, RedQ Inc has been recognized as one of the top
            design and development firms in New York City. It’s nice to feel
            appreciated!
          </p>
        </Col>
      </Row>
      <ProjectTabs />
    </div>
  );
}

export default Project;
