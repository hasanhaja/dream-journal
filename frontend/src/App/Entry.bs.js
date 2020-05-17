'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var all = Curry._1(Css.style, /* :: */[
      Css.paddingBottom(Css.px(10)),
      /* :: */[
        Css.paddingTop(Css.px(10)),
        /* [] */0
      ]
    ]);

var edit = Curry._1(Css.style, /* :: */[
      Css.height(Css.px(300)),
      /* :: */[
        Css.width(Css.pct(100.0)),
        /* :: */[
          Css.borderRadius(Css.px(3)),
          /* :: */[
            Css.border(Css.px(1), Css.solid, Css.lightgray),
            /* [] */0
          ]
        ]
      ]
    ]);

var Styles = {
  all: all,
  edit: edit
};

function Entry(Props) {
  var param = Props.data;
  var content = param.content;
  var title = param.title;
  var match = React.useState((function () {
          return false;
        }));
  var setEditing = match[1];
  var editing = match[0];
  var editButtonTheme = editing ? "btn-warning" : "btn-outline-secondary";
  return React.createElement("div", {
              className: "card w-75 mx-auto mt-5"
            }, React.createElement("div", {
                  className: "card-header"
                }, React.createElement("div", {
                      className: "row justify-content-between"
                    }, React.createElement("h5", {
                          className: "col-md-4"
                        }, param.date), React.createElement("button", {
                          className: "btn btn-sm " + (editButtonTheme + " col-md-2"),
                          onClick: (function (param) {
                              return Curry._1(setEditing, (function (prev) {
                                            return !prev;
                                          }));
                            })
                        }, editing ? "Cancel" : "Edit"))), React.createElement("div", {
                  className: "card-body"
                }, editing ? React.createElement("div", undefined, React.createElement("h5", {
                            className: "card-title"
                          }, title), React.createElement("textarea", {
                            className: edit
                          }, content), React.createElement("button", {
                            className: " btn btn-outline-success btn-block"
                          }, "Save")) : React.createElement("div", undefined, React.createElement("h5", {
                            className: "card-title"
                          }, title), React.createElement("p", {
                            className: "card-text"
                          }, content))));
}

var make = Entry;

exports.Styles = Styles;
exports.make = make;
/* all Not a pure module */
