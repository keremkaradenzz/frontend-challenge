import React from "react";
import { Row, Col } from "antd";
import styles from "../../styles/Footer.module.css";
import facebook from "../../public/logo/facebook.svg";
import instagram from "../../public/logo/instagram.svg";
import twitter from "../../public/logo/twitter.svg";
import appstore from "../../public/logo/appstore.svg";
import playstore from "../../public/logo/playstore.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row>
        <Col lg={{ span: 12, offset: 2 }}>
          <ul>
            <li>Home</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Collection Statements</li>
            <li>Help</li>
            <li>Manage Accounts</li>
          </ul>
        </Col>
        <Col xs={{ span:22, offset: 2}} lg={{ span: 12, offset: 2 }}>
          <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        </Col>
        <Col xs={{ span:24, offset: 2}} lg={{ span: 12, offset: 2 }}>
          <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <div style={{ marginRight: 10 }}>
              <Image src={facebook} alt="facebook" width="14" height="30" />
            </div>
            <div style={{ marginRight: 10, marginTop: 2 }}>
              <Image src={twitter} alt="twitter" width="25" height="25" />
            </div>
            <div style={{ marginRight: 10 }}>
              <Image src={instagram} alt="instagram" width="25" height="30" />
            </div>
          </div>
        </Col>
        <Col xs={{ span:8, offset: 2}} lg={{ span:8, offset: 2 }}>
        <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
            <div style={{ marginRight: 10 }}>
              <Image src={playstore} alt="playstore"  />
            </div>
            <div style={{ marginRight: 10, marginTop: 2 }}>
              <Image src={appstore} alt="appstore"  />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
