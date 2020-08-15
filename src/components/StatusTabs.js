import React from "react";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import List from "./List";
import Incorrect from "./Incorrect";
import Untagged from "./Untagged";
import Disabled from "./Disabled";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <p className={cn("tab", isActive && "active")} onClick={onClick}>
      {children}
    </p>
  );
};

export default function StatusTabs() {
  return (
    <Tabs>
      <div className="tabs">
        <Tab>
          <button className="tab">all recipes</button>
        </Tab>
        <Tab>
          <button className="tab">incorrect</button>
        </Tab>
        <Tab>
          <button className="tab">untagged</button>
        </Tab>
        <Tab>
          <button className="tab">disabled</button>
        </Tab>
      </div>

      <Panel>
        <List />
      </Panel>
      <Panel>
        <Incorrect />
      </Panel>
      <Panel>
        <Untagged />
      </Panel>
      <Panel>
        <Disabled />
      </Panel>
    </Tabs>
  );
}
