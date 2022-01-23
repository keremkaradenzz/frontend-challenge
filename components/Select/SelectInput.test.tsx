import React from "react";
import { findByTestAttr } from "../../helpers/test-utils";
import { shallow, mount } from "enzyme";
import SelectInput from "./SelectInput";
import { render, fireEvent, waitFor } from "@testing-library/react";

const setUp = (props: any = {}) => {
  const component = shallow(<SelectInput {...props} />);
  return component;
};

describe("renders ", () => {
  let comp: any;
  beforeEach(() => {
    const mockFunc = jest.fn();
    const props = {
      defaultValue: "sortYearDesc",
      handleChange: mockFunc(),
    };
    comp = setUp();
  });
  it("Should render a select input ", () => {
    const card = findByTestAttr(comp, "selectInputComponent");
    expect(card.length).toBe(1);
  });
});

describe("select event test", () => {
  let wrapper;
  it("select element  test", async () => {
    const mockFunc = jest.fn();
    const props = {
      defaultValue: "sortTitleDesc",
      handleChange: mockFunc(),
    };

    wrapper = render(<SelectInput {...props} />);

    const elt = wrapper.getByRole("combobox");
    fireEvent.change(elt, { target: { value: "sortTitleDesc" } });
    expect(elt.value).toBe("sortTitleDesc");
  });
});
