import "@testing-library/jest-dom";
import * as React from "react";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
    }: React.PropsWithChildren<{ className?: string }>) =>
      React.createElement("div", { className }, children),
  },
  useReducedMotion: () => true,
}));
