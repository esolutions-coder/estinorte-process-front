import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import NavBar from "./navbar";

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <div>
      <div id="modal__home"></div>
      <NavBar />
      <div id="toast__home"></div>
      <div className="content py--12 px--32">{props.children}</div>
    </div>
  );
}

export default Layout;
