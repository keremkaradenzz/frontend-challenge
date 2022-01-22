import React from "react";
import { useQuery } from "react-query";
import Card from "../components/Card/Card";
import { Row, Col } from "antd";
const Movies = () => {
  const { isLoading, error, data } = useQuery("getMovie", () =>
    fetch("http://localhost:3000/api/movies").then((res) => res.json())
  );

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>Oops! Something went wrong</span>;
  }

  return (
    <main style={{ overflow: "hidden", width: "100%" }}>
      <Row>
        <Col lg={{ span: 24, offset: 2 }}>
          <Row gutter={8}>
            {data?.entries?.map(
              (item: any, index: any) =>
                index <= 20 && (
                  <Col
                    key={index}
                    xs={{ span: 6, offset: 1 }}
                    lg={{ span: 3, offset: 1 }}
                    style={{ marginLeft: 1 }}
                  >
                    <Card message={item.title} />
                  </Col>
                )
            )}
          </Row>
        </Col>
      </Row>
    </main>
  );
};

export default Movies;
