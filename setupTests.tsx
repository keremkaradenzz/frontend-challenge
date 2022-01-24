import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import * as React from "react";
import '@testing-library/jest-dom';
import {server} from "./mocks/server";
import { setLogger } from 'react-query';
// import { JSDOM } from 'jsdom';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// silence react-query errors
setLogger({
    log: console.log,
    warn: console.warn,
    error: () => { },
});

/* THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES */
// const { document } = new JSDOM(
//     "<!DOCTYPE html><body><div id='root'></div></body>"
//   ).window;
//   global.document = document;
//   global.window = document.defaultView;
//   global.HTMLElement = window.HTMLElement;
//   global.HTMLAnchorElement = window.HTMLAnchorElement;
//   global.React = React;
//   global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
//   global.cancelAnimationFrame = (id) => clearTimeout(id);
