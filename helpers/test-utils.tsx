import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {data} from "../pages/api/Data"
export const handlers = [
  rest.get("*/movies/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data)
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 15,
      },
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}> {ui} </QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export const findByTestAttr = (component: any, attr: any) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

// export const checkProps = (component:any, expectedProps) => {
//     const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
//     return propsErr;
// }
