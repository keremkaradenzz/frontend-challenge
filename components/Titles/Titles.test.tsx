import React from "react";
import { findByTestAttr } from "../../helpers/test-utils";
import { shallow } from "enzyme";
import Titles from "./Titles";

const setUp = () => {
  const component = shallow(<Titles />);
  return component;
};

describe("renders ", () => {
  let comp: any;
  beforeEach(() => {
    comp = setUp();
  });
  it("Should render a Titles Comp ", () => {
    const card = findByTestAttr(comp, "titlesComponent");
    expect(card.length).toBe(1);
  });

  it("Should render a  Title ", () => {
    const card = findByTestAttr(comp, "titlesTitle");
    expect(card.length).toBe(1);
  });

});
