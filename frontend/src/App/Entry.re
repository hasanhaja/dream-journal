type t = {
  title: string,
  content: string,
  date: string // for now, it should be a date object
};

[@react.component]
let make = (~data as {title, content, date}) => {
  <div className="card w-75 mx-auto mt-5">
    <div className="card-header">
      <div className="row justify-content-between">
        <h5 className="col-md-4"> date->React.string </h5>
        <button className="btn btn-sm btn-outline-secondary col-md-2">
          "Edit"->React.string
        </button>
      </div>
    </div>
    <div className="card-body">
      <h5 className="card-title"> title->React.string </h5>
      <p className="card-text"> content->React.string </p>
    </div>
  </div>;
};
