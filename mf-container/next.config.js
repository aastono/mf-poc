const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const mfConf = {
      name: "mf-container",
      library: {
        type: config.output.libraryTarget,
        name: "mf-container",
      },
      remotes: {
        core: "mf-core",
        pro: "mf-pro", 
      },
      exposes: {
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    return config;
  },
};