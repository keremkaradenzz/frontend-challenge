import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/Card/Card";
import { Row, Col } from "antd";
import { Input, Space } from "antd";
const { Search } = Input;

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const { isLoading, error, data } = useQuery("getMovie", () =>
    fetch("http://localhost:3000/api/movies").then((res) => res.json())
  );

  useEffect(() => {
    if (data?.entries) {
      const filter = data.entries.filter(
        (item: any) => item.programType === "series"
      );
      setSeriesData(filter);
      setSearchData(filter);
    }
  }, [data]);

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>Oops! Something went wrong</span>;
  }

  const onSearch = (value: any) => {
    if (value.length > 2) {
      const filter = seriesData.filter(
        (item: any) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.description.includes(value)
      );
      setSearchData(filter);
    } else {
      setSearchData(seriesData);
    }
  };

  console.log(data);
  return (
    <main style={{ overflow: "hidden", width: "100%" }}>
      <Row>
        <Col lg={{ span: 24, offset: 2 }}>
          <div style={{marginBottom: 30}}>
            <Search
              placeholder="Search..."
              onSearch={onSearch}
              style={{ width: 400 }}
            />
          </div>
          <Row gutter={8}>
            {searchData.length === 0 ? (
              <span>Sorry Not Found</span>
            ) : ( 
              searchData?.map(
                (item: any, index: any) =>
                  index <= 20 &&
                  item.programType === "series" && (
                    <Col
                      key={index}
                      xs={{ span: 6, offset: 1 }}
                      lg={{ span: 3, offset: 1 }}
                      style={{ marginLeft: 1 }}
                    >
                      <Card message={item.title} />
                    </Col>
                  )
              )
            )}
          </Row>
        </Col>
      </Row>
    </main>
  );
};

export default Series;