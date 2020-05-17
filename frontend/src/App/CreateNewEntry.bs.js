'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var main = Curry._1(Css.style, /* :: */[
      Css.margin(Css.auto),
      /* :: */[
        Css.top(Css.px(5)),
        /* :: */[
          Css.bottom(Css.px(20)),
          /* [] */0
        ]
      ]
    ]);

var all = Curry._1(Css.style, /* :: */[
      Css.paddingBottom(Css.px(10)),
      /* :: */[
        Css.paddingTop(Css.px(10)),
        /* [] */0
      ]
    ]);

var Styles = {
  main: main,
  all: all
};

function CreateNewEntry(Props) {
  var handleClose = Props.handleClose;
  return React.createElement("div", {
              className: main
            }, React.createElement("form", undefined, React.createElement("div", {
                      className: "jumbotron mb-3"
                    }, React.createElement("h1", {
                          className: "display-4"
                        }, "New dream"), React.createElement("div", undefined, React.createElement("label", {
                              className: all + " lead"
                            }, "Title"), React.createElement("input", {
                              className: all + " form-control",
                              placeholder: "Title"
                            })), React.createElement("div", undefined, React.createElement("label", {
                              className: all + " lead"
                            }, "What did you dream?"), React.createElement("textarea", {
                              className: all + " form-control",
                              placeholder: "Dream"
                            })), React.createElement("div", {
                          className: all
                        }, React.createElement("button", {
                              className: "btn btn-outline-success btn-block",
                              onClick: (function (param) {
                                  return Curry._1(handleClose, /* () */0);
                                })
                            }, "Save")))));
}

var make = CreateNewEntry;

exports.Styles = Styles;
exports.make = make;
/* main Not a pure module */
