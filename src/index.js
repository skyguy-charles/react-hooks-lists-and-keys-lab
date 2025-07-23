import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import ProjectItem from "./components/ProjectItem";
import ProjectList from "./components/ProjectList";

ReactDOM.render(<App />, document.getElementById("root"));
<StrictMode>
<ProjectItem/>
<ProjectList></ProjectList>
</StrictMode>