module Styles = {
  open Css;

  let modal =
    style([
      position(fixed),
      top(zero),
      left(zero),
      width(pct(100.0)),
      height(pct(100.0)),
      background(rgba(0, 0, 0, 0.6)),
    ]);

  let modalMain =
    style([
      position(fixed),
      background(white),
      width(pct(80.0)),
      height(auto),
      top(pct(50.0)),
      left(pct(50.0)),
      borderRadius(px(5)),
      maxWidth(pct(80.0)),
      transform(translate(pct(-50.0), pct(-50.0))),
    ]);

  let cancel =
    style([position(fixed), margin(zero), top(px(5)), left(px(5))]);

  let displayBlock = style([display(block), zIndex(1)]);

  let displayNone = style([display(none)]);
};

[@react.component]
let make = (~handleClose, ~children) => {
  let display = true;
  let showHideClassName =
    display
      ? Styles.modal ++ " " ++ Styles.displayBlock
      : Styles.modal ++ " " ++ Styles.displayNone;

  <div className=showHideClassName>
    <div className=Styles.modalMain>
      children
      <button
        className={Styles.cancel ++ " btn btn-link"}
        onClick={_ => handleClose()}>
        "Cancel"->React.string
      </button>
    </div>
  </div>;
};
