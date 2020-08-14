import React from "react";
import "./App.css";

import StatusTabs from "./components/StatusTabs";
import RecipeStats from "./components/RecipeStats";

function App() {
  return (
    <div className="App">
      <RecipeStats />
      <StatusTabs />
    </div>
  );
}

export default App;
