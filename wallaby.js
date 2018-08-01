module.exports = function(w) {
  return {
    files: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "*.ts",
      "!src/**/*.spec.ts",
      "!src/**/*.spec.tsx"
    ],

    tests: ["src/**/*.spec.ts", "src/**/*.spec.tsx"],

    env: {
      type: "node",
      runner: "node"
    },

    testFramework: "jest"
  };
};
