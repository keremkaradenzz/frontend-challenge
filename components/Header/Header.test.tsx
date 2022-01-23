import React from "react";
import { findByTestAttr } from "../../helpers/test-utils";
import { shallow } from "enzyme";
import Header from "./Header";

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

describe("renders ", () => {
  let comp: any;
  beforeEach(() => {
    comp = setUp();
  });
  it("Should render a header Comp ", () => {
    const card = findByTestAttr(comp, "headerComponent");
    expect(card.length).toBe(1);
  });

  it("Should render a header Title ", () => {
    const card = findByTestAttr(comp, "headerTitle");
    expect(card.length).toBe(1);
  });


  it("Should render a header Title ", () => {
    const card = findByTestAttr(comp, "headerRightMenu");
    expect(card.length).toBe(1);
  });

});
