import { Row, Col, Tabs, Space } from "antd";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;

const ProjectTabs = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        tabBarGutter={80}
        style={{ marginTop: 50 }}
      >
        <TabPane tab="DESIGN" key="1">
          <Row>
            <Col span={12}>
              <img
                alt="example"
                src="p1.jpeg"
                style={{
                  borderRadius: 50,
                  marginTop: 50,
                }}
              ></img>
              <div style={{ marginTop: 30 }}>
                <Row>
                  <Space size={65}>
                    <p>
                      FEATURE IN <Link>AWWWARDS</Link>
                    </p>
                    <p>
                      <b>4.5K</b> Views
                    </p>
                    <p>
                      <b>1.5K</b> Love
                    </p>
                    <p>
                      <b>1.2K</b> Feedback
                    </p>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col
              span={12}
              xs={6}
              sm={6}
              md={6}
              lg={8}
              xl={8}
              style={{ marginTop: 150 }}
            >
              <div style={{ marginBottom: 50 }}>
                <Link style={{ fontSize: 20 }}>Visit Live Site</Link>
              </div>
              <h1>American Media Site</h1>
              <p>
                An effective and immersive user experience is what catches the
                attention and spreads a clear message. That's why we attach
                great importance to the fact that ergonomics serves the design,
                and that this design is innovative and neat.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="DEVELOPMENT" key="2">
          <Row>
            <Col span={12}>
              <img
                alt="example"
                src="p1.jpeg"
                style={{
                  borderRadius: 50,
                  marginTop: 50,
                }}
              ></img>
              <div style={{ marginTop: 30 }}>
                <Row>
                  <Space size={65}>
                    <p>
                      FEATURE IN <Link>AWWWARDS</Link>
                    </p>
                    <p>
                      <b>4.5K</b> Views
                    </p>
                    <p>
                      <b>1.5K</b> Love
                    </p>
                    <p>
                      <b>1.2K</b> Feedback
                    </p>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col
              span={12}
              xs={6}
              sm={6}
              md={6}
              lg={8}
              xl={8}
              style={{ marginTop: 150 }}
            >
              <div style={{ marginBottom: 50 }}>
                <Link style={{ fontSize: 20 }}>Visit Live Site</Link>
              </div>
              <h1>American Media Site</h1>
              <p>
                An effective and immersive user experience is what catches the
                attention and spreads a clear message. That's why we attach
                great importance to the fact that ergonomics serves the design,
                and that this design is innovative and neat.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="ANIMATION" key="3">
          <Row>
            <Col span={12}>
              <img
                alt="example"
                src="p1.jpeg"
                style={{
                  borderRadius: 50,
                  marginTop: 50,
                }}
              ></img>
              <div style={{ marginTop: 30 }}>
                <Row>
                  <Space size={65}>
                    <p>
                      FEATURE IN <Link>AWWWARDS</Link>
                    </p>
                    <p>
                      <b>4.5K</b> Views
                    </p>
                    <p>
                      <b>1.5K</b> Love
                    </p>
                    <p>
                      <b>1.2K</b> Feedback
                    </p>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col
              span={12}
              xs={6}
              sm={6}
              md={6}
              lg={8}
              xl={8}
              style={{ marginTop: 150 }}
            >
              <div style={{ marginBottom: 50 }}>
                <Link style={{ fontSize: 20 }}>Visit Live Site</Link>
              </div>
              <h1>American Media Site</h1>
              <p>
                An effective and immersive user experience is what catches the
                attention and spreads a clear message. That's why we attach
                great importance to the fact that ergonomics serves the design,
                and that this design is innovative and neat.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="MARKETING" key="4">
          <Row>
            <Col span={12}>
              <img
                alt="example"
                src="p1.jpeg"
                style={{
                  borderRadius: 50,
                  marginTop: 50,
                }}
              ></img>
              <div style={{ marginTop: 30 }}>
                <Row>
                  <Space size={65}>
                    <p>
                      FEATURE IN <Link>AWWWARDS</Link>
                    </p>
                    <p>
                      <b>4.5K</b> Views
                    </p>
                    <p>
                      <b>1.5K</b> Love
                    </p>
                    <p>
                      <b>1.2K</b> Feedback
                    </p>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col
              span={12}
              xs={6}
              sm={6}
              md={6}
              lg={8}
              xl={8}
              style={{ marginTop: 150 }}
            >
              <div style={{ marginBottom: 50 }}>
                <Link style={{ fontSize: 20 }}>Visit Live Site</Link>
              </div>
              <h1>American Media Site</h1>
              <p>
                An effective and immersive user experience is what catches the
                attention and spreads a clear message. That's why we attach
                great importance to the fact that ergonomics serves the design,
                and that this design is innovative and neat.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="TV ADVERTISEMENT" key="5">
          <Row>
            <Col span={12}>
              <img
                alt="example"
                src="p1.jpeg"
                style={{
                  borderRadius: 50,
                  marginTop: 50,
                }}
              ></img>
              <div style={{ marginTop: 30 }}>
                <Row>
                  <Space size={65}>
                    <p>
                      FEATURE IN <Link>AWWWARDS</Link>
                    </p>
                    <p>
                      <b>4.5K</b> Views
                    </p>
                    <p>
                      <b>1.5K</b> Love
                    </p>
                    <p>
                      <b>1.2K</b> Feedback
                    </p>
                  </Space>
                </Row>
              </div>
            </Col>
            <Col
              span={12}
              xs={6}
              sm={6}
              md={6}
              lg={8}
              xl={8}
              style={{ marginTop: 150 }}
            >
              <div style={{ marginBottom: 50 }}>
                <Link style={{ fontSize: 20 }}>Visit Live Site</Link>
              </div>
              <h1>American Media Site</h1>
              <p>
                An effective and immersive user experience is what catches the
                attention and spreads a clear message. That's why we attach
                great importance to the fact that ergonomics serves the design,
                and that this design is innovative and neat.
              </p>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProjectTabs;
