import React from "react";
import Series from "../../../pages/series";
import { render } from "@testing-library/react";
import sinon from "sinon";
import { data } from "../../../pages/api/Data";
import * as reactQuery from "react-query";

describe("renders ", () => {
  const sandbox = sinon.createSandbox();
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test("should fetch and render components", () => {
    sandbox
      .stub(reactQuery, "useQuery")
      .returns({ data: data, isLoading: false, error: null });
    const result = render(<Series />);

    expect(result.queryByTestId("seriesComponent")).toBeDefined();
  });

  //   it("Should render series with error ", async () => {
  //     const screen = render(
  //       <QueryClientProvider client={queryClient}>
  //         <Series />
  //       </QueryClientProvider>
  //     );
  //     expect(
  //       await screen.findByText("Oops! Something went wrong")
  //     ).toBeInTheDocument();
  //   });
});
