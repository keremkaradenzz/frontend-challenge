import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/Card/Card";
import { Row, Col } from "antd";
import { Input } from "antd";
import { sortObjects, sortList } from "../helpers/helper";
import SelectInput from "../components/Select/SelectInput";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
const { Search } = Input;

const Series = () => {
  const [seriesData, setSeriesData] = useState<object[]>([]);
  const [searchData, setSearchData] = useState<object[]>([]);
  const [selectVal, setSelectVal] = useState<string>("sortTitleDesc");
  
  const { isLoading, error, data } = useQuery("getMovie", () =>
    fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}api/movies`).then((res) => res.json())
  );

  useEffect(() => {
    if (data?.entries) {
      const filter = data.entries.filter(
        (item: any) => item.programType === "series" && item.releaseYear >= 2010
      );

      const sortFilter = sortObjects(filter, "title");
      setSeriesData(sortFilter);
      setSearchData(sortFilter);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />
  } else if (error) {
    return <Error />
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

  const handleChange = (value: string) => {
    setSelectVal(value);
    const sortData: object[] | undefined = sortList(searchData, value);
    if (sortData) {
      setSearchData(sortData);
    }
  };
  return (
    <main style={{ overflow: "hidden", width: "100%" }} data-test="seriesComponent">
      <Row>
        <Col lg={{ span: 12, offset: 2 }}>
          <div style={{ marginBottom: 30 }} >
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
                      <Card images={item.images} message={item.title} />
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
