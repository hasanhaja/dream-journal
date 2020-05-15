'use strict';

var React = require("react");

function Entry(Props) {
  var param = Props.data;
  return React.createElement("div", {
              className: "card w-75 mx-auto mt-5"
            }, React.createElement("div", {
                  className: "card-header"
                }, React.createElement("div", {
                      className: "row justify-content-between"
                    }, React.createElement("h5", {
                          className: "col-md-4"
                        }, param.date), React.createElement("button", {
                          className: "btn btn-sm btn-outline-secondary col-md-2"
                        }, "Edit"))), React.createElement("div", {
                  className: "card-body"
                }, React.createElement("h5", {
                      className: "card-title"
                    }, param.title), React.createElement("p", {
                      className: "card-text"
                    }, param.content)));
}

var make = Entry;

exports.make = make;
/* react Not a pure module */
