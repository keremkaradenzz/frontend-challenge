import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from "jsdom";
import * as React from "react";


// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });




/* THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES */
const { document } = new JSDOM(
    "<!DOCTYPE html><body><div id='root'></div></body>"
  ).window;
  global.document = document;
  global.window = document.defaultView;
  global.HTMLElement = window.HTMLElement;
  global.HTMLAnchorElement = window.HTMLAnchorElement;
  global.React = React;
  global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);
