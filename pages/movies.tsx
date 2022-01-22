import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/Card/Card";
import { Row, Col } from "antd";
import { sortObjects, sortList } from "../helpers/helper";
import SelectInput from "../components/Select/SelectInput";
import { Input, Space } from "antd";
const { Search } = Input;
const Movies = () => {
  const [movieData, setMovieData] = useState<object[]>([]);
  const [searchData, setSearchData] = useState<object[]>([]);
  const [selectVal, setSelectVal] = useState<string>("sortTitleDesc");
  const { isLoading, error, data } = useQuery("getMovie", () =>
    fetch("http://localhost:3000/api/movies").then((res) => res.json())
  );

  useEffect(() => {
    if (data?.entries) {
      const filter = data.entries.filter(
        (item: any) => item.programType === "movie" && item.releaseYear >= 2010
      );
      const sortFilter: object[] = sortObjects(filter, "title");
      setMovieData(sortFilter);
      setSearchData(sortFilter);
    }
  }, [data]);

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>Oops! Something went wrong</span>;
  }
  const onSearch = (value: any) => {
    if (value.length > 2) {
      const filter = movieData.filter(
        (item: any) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.description.includes(value)
      );
      setSearchData(filter);
    } else {
      setSearchData(movieData);
    }
  };

  const handleChange = (value: string) => {
    setSelectVal(value);
    const sortData: object[] | undefined = sortList(searchData, value);
    if (sortData) {
      setSearchData(sortData);
    }
  };

  return (
    <main style={{ overflow: "hidden", width: "100%" }}>
      <Row>
      <Col lg={{ span: 12, offset: 2 }}>
          <div style={{ marginBottom: 30 }}>
            <Search
              placeholder="Search..."
              onSearch={onSearch}
              style={{ width: 400 }}
            />
          </div>
        </Col>
        <Col lg={{ span: 8, offset: 0 }}>
          <div style={{ marginRight: 15, marginBottom: 30, float: "right" }}>
            <SelectInput defaultValue={selectVal} handleChange={handleChange} />
          </div>
        </Col>
        <Col lg={{ span: 24, offset: 2 }}>
          <Row gutter={8}>
            {searchData?.map(
              (item: any, index: any) =>
                index <= 20 &&
                item.programType === "movie" && (
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
