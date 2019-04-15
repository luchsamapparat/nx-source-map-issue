module.exports = {
  name: 'foo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/foo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
