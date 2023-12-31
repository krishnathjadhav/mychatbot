import React, { useState } from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => {
  const [cc, setCC] = useState(10);
  return (
    <div
      data-testid="test-component"
      className={`test-component test-component-${theme}`}
    >
      <h1 className="heading">I'm the test component</h1>
      <h2>Made with love by Harvey, see KK:{cc}</h2>
    </div>
  );
};

export default TestComponent;
