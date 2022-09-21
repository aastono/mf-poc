const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
  future: { webpack5: true },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "mf-core",
      library: {
        type: config.output.libraryTarget,
        name: "mf-core",
      },
      filename: "static/runtime/mfCoreRemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./core": "./components/core",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://mf-app1.vercel.app/_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    return config;
  },
};