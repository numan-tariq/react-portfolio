import React from "react";
import { Row, Col, Space } from "antd";
import AwardCard from "../../components/AwardCard";

const Awards = () => {
  return (
    <div style={{ marginLeft: 70, marginTop: 100 }}>
      <Row>
        <Col xs={6} sm={6} md={6} lg={8} xl={12}>
          <h1>Honorable Recognitions & Awards</h1>
          <p>
            Year after year, RedQ Inc has been recognized as one of the top
            design and development firms in New York City. It’s nice to feel
            appreciated!
          </p>
        </Col>
      </Row>
      <div style={{ marginTop: 70 }}>
        <Row>
          <Space size={50}>
            <AwardCard imgSrc="award-1.png" avatarSrc="awardee-1.png" />
            <AwardCard imgSrc="award-2.png" avatarSrc="awardee-2.png" />
            <AwardCard imgSrc="award-3.png" avatarSrc="awardee-3.png" />
            <AwardCard imgSrc="award-4.png" avatarSrc="awardee-4.png" />
          </Space>
        </Row>
      </div>
    </div>
  );
};

export default Awards;
