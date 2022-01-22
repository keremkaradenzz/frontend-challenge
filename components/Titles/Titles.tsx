import React, { useEffect, useState} from 'react';
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import {titles} from "../../pages/index";
import styles from "../../styles/Titles.module.css"
const Titles = () => {

   const router = useRouter();
   const [pathName, setPathName] = useState<string>("Titles")
   useEffect(()=> {

        let path = router.route.split("/");
        let indexTitle = titles.filter(item => item.toLowerCase() === path[1]);
        
        if(indexTitle?.length > 0) {
            setPathName(indexTitle[0]);
        }else{
            setPathName("Titles")
        }
        
   },[router.route])
   
  return <div className={styles.titles}>
        <Row >
            <Col lg={{span: 8, offset: 2}}>
                <h2>Populer {pathName}</h2>
            </Col>
        </Row>
  </div>;
};

export default Titles;
