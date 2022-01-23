import React from "react";
import styles from "../../styles/Header.module.css";
import { Row, Col } from "antd";
import Link from "next/link"
const Header = () => {
  return (
    <header className={styles.header} data-test="headerComponent">
      <Row>
        <Col xs={{ span: 12, offset: 2 }}>
            <Link href="/">
            <a><h1 className={styles.h1} data-test="headerTitle">DEMO Streaming</h1></a>
          </Link>
        </Col>
        <Col xs={{ span: 8, offset: 2 }} >
          <div className={styles.rightsideMenu} data-test="headerRightMenu">
            <p>Log in</p>
            <button>Start your free trail</button>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
