module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require tests/steps/**/*.ts',
    'tests/features/**/*.feature',
  ].join(' ')
};

