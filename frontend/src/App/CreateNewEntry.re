module Styles = {
  open Css;

  let main = style([margin(auto), top(px(5)), bottom(px(20))]);

  let all = style([paddingBottom(px(10)), paddingTop(px(10))]);
};

[@react.component]
let make = (~handleClose) => {
  <div className=Styles.main>
    <form>
      <div className="jumbotron mb-3">
        <h1 className="display-4"> "New dream"->React.string </h1>
        <div>
          <label className={Styles.all ++ " lead"}>
            "Title"->React.string
          </label>
          <input
            className={Styles.all ++ " form-control"}
            placeholder="Title"
          />
        </div>
        <div>
          <label className={Styles.all ++ " lead"}>
            "What did you dream?"->React.string
          </label>
          <textarea
            className={Styles.all ++ " form-control"}
            placeholder="Dream"
          />
        </div>
        <div className=Styles.all>
          <button
            className="btn btn-outline-success btn-block"
            onClick={_ => handleClose()}>
            "Save"->React.string
          </button>
        </div>
      </div>
    </form>
  </div>;
};
