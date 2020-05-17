module Styles = {
  open Css;

  let dropDown = style([position(relative), display(inlineBlock)]);

  let dropDownContent =
    style([
      right(zero),
      display(block),
      borderRadius(px(5)),
      padding(px(12)),
      position(absolute),
      backgroundColor(white),
      boxShadow(Shadow.box(~y=px(8), ~blur=px(16), rgba(0, 0, 0, 0.2))),
      zIndex(1),
    ]);
};

[@react.component]
let make = () => {
  let (show, setShow) = React.useState(() => false);

  <div className=Styles.dropDown>
    <button className="btn btn-link" onClick={_ => setShow(prev => !prev)}>
      "Settings"->React.string
    </button>
    {show
       ? <div className=Styles.dropDownContent>
           <button className="btn btn-link"> "About"->React.string </button>
           <button className="btn btn-danger"> "Logout"->React.string </button>
         </div>
       : React.null}
  </div>;
};
