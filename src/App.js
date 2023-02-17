import React from "react";
import TabContainer from "./TabContainer"; // import container component

function App() {
  // define some sample tabs
  const tabs = [
    { id: 1, heading: "All Questions", data: "/questions" },
    { id: 2, heading: "All Question Types", data: "/questions/qtype" },
    { id: 3, heading: "All HTML Questions", data: "/questions/qtype/HTML" },
  ];

  return (
    <div className="App">
      <h1>Tab Example</h1>
      <TabContainer tabs={tabs} /> {/* render container component with tabs prop */}
    </div>
  );
}

export default App;