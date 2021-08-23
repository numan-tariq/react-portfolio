import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function EducationCard({ src, title, description }) {
  return (
    <Card
      hoverable
      style={{ width: 450, height: 400 }}
      cover={<img alt="example" src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}

export default EducationCard;
