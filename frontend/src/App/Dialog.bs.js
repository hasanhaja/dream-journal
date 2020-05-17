'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var modal = Curry._1(Css.style, /* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.top(Css.zero),
        /* :: */[
          Css.left(Css.zero),
          /* :: */[
            Css.width(Css.pct(100.0)),
            /* :: */[
              Css.height(Css.pct(100.0)),
              /* :: */[
                Css.background(Css.rgba(0, 0, 0, 0.6)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var modalMain = Curry._1(Css.style, /* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.background(Css.white),
        /* :: */[
          Css.width(Css.pct(80.0)),
          /* :: */[
            Css.height(Css.auto),
            /* :: */[
              Css.top(Css.pct(50.0)),
              /* :: */[
                Css.left(Css.pct(50.0)),
                /* :: */[
                  Css.borderRadius(Css.px(5)),
                  /* :: */[
                    Css.maxWidth(Css.pct(80.0)),
                    /* :: */[
                      Css.transform(Css.translate(Css.pct(-50.0), Css.pct(-50.0))),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var cancel = Curry._1(Css.style, /* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.margin(Css.zero),
        /* :: */[
          Css.top(Css.px(5)),
          /* :: */[
            Css.left(Css.px(5)),
            /* [] */0
          ]
        ]
      ]
    ]);

var displayBlock = Curry._1(Css.style, /* :: */[
      Css.display(Css.block),
      /* :: */[
        Css.zIndex(1),
        /* [] */0
      ]
    ]);

var displayNone = Curry._1(Css.style, /* :: */[
      Css.display(Css.none),
      /* [] */0
    ]);

var Styles = {
  modal: modal,
  modalMain: modalMain,
  cancel: cancel,
  displayBlock: displayBlock,
  displayNone: displayNone
};

function Dialog(Props) {
  var handleClose = Props.handleClose;
  var children = Props.children;
  var showHideClassName = modal + (" " + displayBlock);
  return React.createElement("div", {
              className: showHideClassName
            }, React.createElement("div", {
                  className: modalMain
                }, children, React.createElement("button", {
                      className: cancel + " btn btn-link",
                      onClick: (function (param) {
                          return Curry._1(handleClose, /* () */0);
                        })
                    }, "Cancel")));
}

var make = Dialog;

exports.Styles = Styles;
exports.make = make;
/* modal Not a pure module */
