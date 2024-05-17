const { override } = require('customize-cra');

const ignoreSourceMapWarnings = () => (config) => {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
};

module.exports = override(
    ignoreSourceMapWarnings()
);
