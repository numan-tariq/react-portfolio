import { Card, Avatar } from "antd";
const { Meta } = Card;

const AwardCard = ({ imgSrc, avatarSrc }) => {
  return (
    <Card
      style={{
        width: 270,
        height: 350,
        borderRadius: 10,
      }}
      cover={
        <img
          style={{ width: 100, height: 90, marginTop: 40, marginLeft: 30 }}
          alt="example"
          src={imgSrc}
        />
      }
    >
      <div style={{ textAlign: "center" }}>
        <h5>Free Software Advice</h5>
        <p>Top Rated App Development Companies USA</p>
      </div>
      <Meta
        style={{ marginLeft: 35 }}
        avatar={<Avatar style={{ marginTop: 10 }} src={avatarSrc} />}
        title="Awardee"
        description="The Jury 2018"
      />
    </Card>
  );
};

export default AwardCard;
