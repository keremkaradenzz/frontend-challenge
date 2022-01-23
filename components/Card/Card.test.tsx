import React from "react";
import { findByTestAttr } from "../../helpers/test-utils";
import { shallow } from "enzyme";
import Card from "./Card";

const setUp = (props: any = {}) => {
 
  const component = shallow(<Card {...props} />);
  return component;
};

describe("renders ", () => {
  let comp: any;
  beforeEach(() => {
    const props = {
      message:"Lotr"
    }
    comp = setUp();
  });
  it("Should render a card ", () => {
    const card = findByTestAttr(comp, "cardComponent");
    expect(card.length).toBe(1);
  });
});
