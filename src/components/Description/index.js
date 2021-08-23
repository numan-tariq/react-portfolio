import React from "react";
import { Row, Col, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const Description = () => {
  return (
    <Row style={{ marginLeft: 120, marginTop: 100 }}>
      <Col span={12} xs={4} sm={4} md={6} lg={6} xl={9}>
        <h2>Which is why we Never Stop Learning.</h2>
        <br></br>
        <h5>We believe that we succeed when our clients succeed.</h5>
        <br></br>
        <p>
          I’m John Doe, a New Zealand born digital designer currently looking
          for opportunities in Canada. Over the 8 years of my career, my
          portfolio includes user interface design, brand & identity design,
          illustration, and art & creative direction.
        </p>
        <br></br>
        <p>
          While at Neverbland over the last few years, I've worked on web and
          product solutions for a range of startups, in a variety of industries.
        </p>
        <div style={{ marginTop: 50 }}>
          <Link>Start Your Project?</Link>
          <Button type="primary" size="large" style={{ marginLeft: 90 }}>
            hello@redq.io
          </Button>
        </div>
      </Col>
      <Col span={12} style={{ marginLeft: 120 }}>
        <Row>
          <div>
            <h5>UI/UX Design</h5>
            <p>
              <Space size={10}>
                <PlusOutlined />
                Design Sprints
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                User Research
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                Visual Design
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                Mobile App Design
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                Tracking & Learning
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                Building Traction
              </Space>
            </p>
            <div style={{ marginTop: 80 }}>
              <h5>Mobile App Development</h5>
              <p>
                <Space size={10}>
                  <PlusOutlined />
                  iOS
                </Space>
              </p>
              <p>
                <Space size={10}>
                  <PlusOutlined />
                  Android
                </Space>
              </p>
              <p>
                <Space size={10}>
                  <PlusOutlined />
                  React Native
                </Space>
              </p>
              <p>
                <Space size={10}>
                  <PlusOutlined />
                  Ionic & Apache Cordova
                </Space>
              </p>
              <p>
                <Space size={10}>
                  <PlusOutlined />
                  NodeJS
                </Space>
              </p>
              <p>
                <Space size={10}>
                  <PlusOutlined />
                  3D & VR
                </Space>
              </p>
            </div>
          </div>
          <div style={{ marginLeft: 120 }}>
            <h5>Web Development</h5>
            <p>
              <Space size={10}>
                <PlusOutlined />
                ReactJS
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                AngularJS
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                ASP.NET MVC
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                WordPress
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                NodeJS
              </Space>
            </p>
            <p>
              <Space size={10}>
                <PlusOutlined />
                Go
              </Space>
            </p>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Description;
