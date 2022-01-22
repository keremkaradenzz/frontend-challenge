import React from "react";
import { Row, Col } from "antd";
import styles from "../../styles/Footer.module.css";
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
        <Col lg={{ span: 12, offset:2}}>
        <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
