import React from "react";
import styles from "../../styles/Header.module.css";
import { Row, Col } from "antd";
import Link from "next/link"
const Header = () => {
  return (
    <div className={styles.header}>
      <Row>
        <Col xs={{ span: 12, offset: 2 }}>
            <Link href="/">
            <a><h1 className={styles.h1}>DEMO Streaming</h1></a>
          </Link>
        </Col>
        <Col xs={{ span: 8, offset: 2 }} >
          <div className={styles.rightsideMenu}>
            <p>Log in</p>
            <button>Start your free trail</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
