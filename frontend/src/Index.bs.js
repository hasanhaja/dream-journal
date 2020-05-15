'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonReactExamples = require("./App/App.bs.js");

function makeContainer(param) {
  var container = document.createElement("div");
  container.className = "root";
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(App$ReasonReactExamples.make, { }), makeContainer(/* () */0));

exports.makeContainer = makeContainer;
/*  Not a pure module */
