import React, { useState } from "react";
import "./styles.css";
import Tabs from "./Components/Tabs";
// Tabs Components
import TabOne from "./Components/TabOne";
import TabTwo from "./Components/TabTwo";
import TabThree from "./Components/TabThree";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Tab One",
    index: 1,
    Component: TabOne
  },
  {
    label: "Tab Two",
    index: 2,
    Component: TabTwo
  },
  {
    label: "Tab Three",
    index: 3,
    Component: TabThree
  }
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
}
