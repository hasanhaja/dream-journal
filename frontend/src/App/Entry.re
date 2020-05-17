type t = {
  title: string,
  content: string,
  date: string // for now, it should be a date object
};

module Styles = {
  open Css;

  // TODO Preset the edit text area size
  let all = style([paddingBottom(px(10)), paddingTop(px(10))]);
  let edit =
    style([
      height(px(300)),
      width(pct(100.0)),
      borderRadius(px(3)),
      border(px(1), solid, lightgray),
    ]);
};

[@react.component]
let make = (~data as {title, content, date}) => {
  let (editing, setEditing) = React.useState(() => false);

  let editingTheme = "btn-outline-secondary";
  let cancelTheme = "btn-warning";

  let editButtonTheme = editing ? cancelTheme : editingTheme;

  <div className="card w-75 mx-auto mt-5">
    <div className="card-header">
      <div className="row justify-content-between">
        <h5 className="col-md-4"> date->React.string </h5>
        <button
          className={"btn btn-sm " ++ editButtonTheme ++ " col-md-2"}
          onClick={_ => setEditing(prev => !prev)}>
          {editing ? "Cancel"->React.string : "Edit"->React.string}
        </button>
      </div>
    </div>
    <div className="card-body">
      {editing
         ? <div>
             <h5 className="card-title"> title->React.string </h5>
             <textarea className=Styles.edit> content->React.string </textarea>
             <button className=" btn btn-outline-success btn-block">
               "Save"->React.string
             </button>
           </div>
         : <div>
             <h5 className="card-title"> title->React.string </h5>
             <p className="card-text"> content->React.string </p>
           </div>}
    </div>
  </div>;
};
