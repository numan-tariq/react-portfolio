import React from "react";
import { Row, Col, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";


function Info() {
return ( <>
  <Row style={{ marginLeft: 70, marginTop: 200 }}>
    <Col xs={6} sm={6} md={8} lg={8} xl={10}>
      <h5 style={{ fontSize: 12 }}>Hello, I'm</h5>
      <h1
        style={{
          fontSize: 70,
          fontStyle: "italic",
          marginBottom: -20,
          color: "#464660",
        }}
      >
        Numan Tariq
      </h1>
      <h5 style={{ marginTop: 10, fontSize: 15 }}>Software Engineer</h5>
      <p style={{ textAlign: "center" }}>
        I am a Computer Scientist. Interested in Internet of Things(IoT). I
        have exposure to my field and have a growth mindset. A motivated and
        hungry person who want to utlilize his full potential and skills.
        Extremely fond of learning new skills and enhance my character. I
        possess quick learning aptitude and curious to be a life long
        learner.
      </p>
      <div style={{ textAlign: "center" }}>
        <Space size={15}>
          <a href="/">
            <FacebookOutlined style={{ fontSize: "26px", color: "#08c" }} />
          </a>
          <a href="/">
            <InstagramOutlined style={{ fontSize: "26px", color: "red" }} />
          </a>
          <a href="/">
            <GithubOutlined style={{ fontSize: "26px", color: "black" }} />
          </a>
          <a href="/">
            <TwitterOutlined style={{ fontSize: "26px", color: "#08c" }} />
          </a>
        </Space>
      </div>
    </Col>
    <Col>
      <img
        src="profile2.png"
        alt="NumanTariq"
        style={{
          borderRadius: 50,
          height: "auto",
          width: 400,
          marginLeft: 150,
          marginTop: -100,
        }}
      ></img>
    </Col>
  </Row>
</>);
}

export default Info;