'use strict';

var React = require("react");

function CreateNewEntry(Props) {
  return React.createElement("div", {
              style: {
                margin: "auto",
                width: "60%"
              }
            }, React.createElement("form", undefined, React.createElement("div", {
                      className: "jumbotron mb-3"
                    }, React.createElement("div", undefined, React.createElement("h1", undefined, "New dream")), React.createElement("div", undefined, React.createElement("label", undefined, "Tile"), React.createElement("input", {
                              className: "form-control",
                              placeholder: "Title"
                            })), React.createElement("div", undefined, React.createElement("label", undefined, "What did you dream?"), React.createElement("textarea", {
                              className: "form-control",
                              placeholder: "Dream"
                            })), React.createElement("div", undefined, React.createElement("button", {
                              className: "btn btn-outline-dark"
                            }, "Save")))));
}

var make = CreateNewEntry;

exports.make = make;
/* react Not a pure module */
