import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => <h1>Grocery List</h1>

const RenderList = () => {
  return (<>
      <Header />
      <ul id="list">
        <li>Potato</li>
        <li>Cabbage</li>
        <li>Green Peas</li>
        <li>Coriander</li>
      </ul>
    </>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<RenderList />);