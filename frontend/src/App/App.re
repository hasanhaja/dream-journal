type data = Entry.t;

let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Pretium nibh ipsum consequat nisl vel. Eget nulla facilisi etiam dignissim diam quis enim. Viverra ipsum nunc aliquet bibendum enim. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Mi quis hendrerit dolor magna. Nascetur ridiculus mus mauris vitae ultricies leo. Non arcu risus quis varius quam quisque id. Tincidunt id aliquet risus feugiat in ante metus. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis massa sed elementum tempus egestas sed sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu volutpat odio facilisis mauris sit amet massa. Egestas tellus rutrum tellus pellentesque eu. Id interdum velit laoreet id donec ultrices. Elementum nisi quis eleifend quam adipiscing.";

let first: data = {title: "First dream", content, date: "11 May 2020"};
let second: data = {title: "Second dream", content, date: "13 May 2020"};
let third: data = {title: "Third dream", content, date: "14 May 2020"};

module Styles = {
  open Css;

  let actionButton =
    style([
      margin(zero),
      bottom(px(20)),
      right(px(20)),
      position(fixed),
      boxShadow(Shadow.box(~y=px(8), ~blur=px(16), rgba(0, 0, 0, 0.2))),
    ]);
};

/**
 * Todo: Use an alert pop up on successful save.
 */
[@react.component]
let make = () => {
  let (modal, setModal) = React.useState(_ => false);
  let closeHandle = () => setModal(_ => false);

  <div>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#"> "Dream Journal"->React.string </a>
      <ul className="nav nav-pills"> <li> <Settings /> </li> </ul>
    </nav>
    <div>
      <Entry data=first />
      <Entry data=second />
      <Entry data=third />
    </div>
    <button
      className={Styles.actionButton ++ " btn btn-primary btn-lg"}
      onClick={_ => setModal(prev => !prev)}>
      "New"->React.string
    </button>
    {modal
       ? <Dialog handleClose=closeHandle>
           <CreateNewEntry handleClose=closeHandle />
         </Dialog>
       : React.null}
  </div>;
};
