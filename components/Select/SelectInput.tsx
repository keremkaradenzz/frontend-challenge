import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SelectInput = ({handleChange}:{ handleChange: any }) => {
  return (
    <Select  style={{ width: 120 }} onChange={handleChange}>
      <Option value="sortYearDesc">Sort by year in descending order.</Option>
      <Option value="sortYearAsc">Sort by year in ascending order.</Option>
      <Option value="sortTitleDesc">Sort by title in descending order.</Option>
      <Option value="sortTitleAsc">Sort by title in ascending order.</Option>
    </Select>
  );
};



export default SelectInput;