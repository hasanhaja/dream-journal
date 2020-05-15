[@react.component]
let make = () => {
  <div style={ReactDOMRe.Style.make(~width="60%", ~margin="auto", ())}>
    <form>
      <div className="jumbotron mb-3">
        <div> <h1> "New dream"->React.string </h1> </div>
        <div>
          <label> "Tile"->React.string </label>
          <input className="form-control" placeholder="Title" />
        </div>
        <div>
          <label> "What did you dream?"->React.string </label>
          <textarea className="form-control" placeholder="Dream" />
        </div>
        <div>
          <button className="btn btn-outline-dark">
            "Save"->React.string
          </button>
        </div>
      </div>
    </form>
  </div>;
};
