import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "tsconfig.json" }]
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"]
};

export default config;
