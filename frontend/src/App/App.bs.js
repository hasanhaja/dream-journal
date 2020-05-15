'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Css_Core = require("bs-css/src/Css_Core.js");
var Entry$ReasonReactExamples = require("./Entry.bs.js");
var Settings$ReasonReactExamples = require("./Settings.bs.js");

var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Pretium nibh ipsum consequat nisl vel. Eget nulla facilisi etiam dignissim diam quis enim. Viverra ipsum nunc aliquet bibendum enim. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Mi quis hendrerit dolor magna. Nascetur ridiculus mus mauris vitae ultricies leo. Non arcu risus quis varius quam quisque id. Tincidunt id aliquet risus feugiat in ante metus. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis massa sed elementum tempus egestas sed sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit amet massa. Egestas tellus rutrum tellus pellentesque eu. Id interdum velit laoreet id donec ultrices. Elementum nisi quis eleifend quam adipiscing.";

var first = {
  title: "First dream",
  content: content,
  date: "11 May 2020"
};

var second = {
  title: "Second dream",
  content: content,
  date: "13 May 2020"
};

var third = {
  title: "Third dream",
  content: content,
  date: "14 May 2020"
};

var actionButton = Curry._1(Css.style, /* :: */[
      Css.margin(Css.zero),
      /* :: */[
        Css.bottom(Css.px(20)),
        /* :: */[
          Css.right(Css.px(20)),
          /* :: */[
            Css.bottom(Css.px(20)),
            /* :: */[
              Css.position(Css.fixed),
              /* :: */[
                Css.boxShadow(Css_Core.Shadow.box(undefined, Css.px(8), Css.px(16), undefined, undefined, Css.rgba(0, 0, 0, 0.2))),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  actionButton: actionButton
};

function App(Props) {
  return React.createElement("div", undefined, React.createElement("nav", {
                  className: "navbar navbar-light bg-light"
                }, React.createElement("a", {
                      className: "navbar-brand",
                      href: "#"
                    }, "Dream Journal"), React.createElement("ul", {
                      className: "nav nav-pills"
                    }, React.createElement("li", undefined, React.createElement(Settings$ReasonReactExamples.make, { })))), React.createElement("div", undefined, React.createElement(Entry$ReasonReactExamples.make, {
                      data: first
                    }), React.createElement(Entry$ReasonReactExamples.make, {
                      data: second
                    }), React.createElement(Entry$ReasonReactExamples.make, {
                      data: third
                    })), React.createElement("button", {
                  className: actionButton + " btn btn-primary btn-lg"
                }, "New"));
}

var make = App;

exports.content = content;
exports.first = first;
exports.second = second;
exports.third = third;
exports.Styles = Styles;
exports.make = make;
/* actionButton Not a pure module */
