import React from "react";

//compoenents
import PostList from "components/PostList/PostList";
import ActionList from "components/ActionList/ActionList";

import "./app.css";

function App() {
  return (
    <div className="min-h-screen app">
      <div
        data-testid="app"
        className="container grid grid-cols-1 gap-4 p-5 pt-10 mx-auto md:grid-cols-3"
      >
        <PostList className="col-span-2" />
        <ActionList />
      </div>
    </div>
  );
}

export default App;
