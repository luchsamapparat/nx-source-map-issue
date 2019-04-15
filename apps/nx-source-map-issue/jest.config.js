module.exports = {
  name: "nx-source-map-issue",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/nx-source-map-issue/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
