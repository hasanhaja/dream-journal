'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Css_Core = require("bs-css/src/Css_Core.js");

var dropDown = Curry._1(Css.style, /* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.display(Css.inlineBlock),
        /* [] */0
      ]
    ]);

var dropDownContent = Curry._1(Css.style, /* :: */[
      Css.right(Css.zero),
      /* :: */[
        Css.display(Css.block),
        /* :: */[
          Css.borderRadius(Css.px(5)),
          /* :: */[
            Css.padding(Css.px(12)),
            /* :: */[
              Css.position(Css.absolute),
              /* :: */[
                Css.backgroundColor(Css.white),
                /* :: */[
                  Css.boxShadow(Css_Core.Shadow.box(undefined, Css.px(8), Css.px(16), undefined, undefined, Css.rgba(0, 0, 0, 0.2))),
                  /* :: */[
                    Css.zIndex(1),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  dropDown: dropDown,
  dropDownContent: dropDownContent
};

function Settings(Props) {
  var match = React.useState((function () {
          return false;
        }));
  var setShow = match[1];
  return React.createElement("div", {
              className: dropDown
            }, React.createElement("button", {
                  className: "btn btn-link",
                  onClick: (function (param) {
                      return Curry._1(setShow, (function (prev) {
                                    return !prev;
                                  }));
                    })
                }, "Settings"), match[0] ? React.createElement("div", {
                    className: dropDownContent
                  }, React.createElement("button", {
                        className: "btn btn-link"
                      }, "About"), React.createElement("button", {
                        className: "btn btn-danger"
                      }, "Logout")) : null);
}

var make = Settings;

exports.Styles = Styles;
exports.make = make;
/* dropDown Not a pure module */
