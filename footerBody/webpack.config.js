const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "learning",
    projectName: "footerBody",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8003, // Tentukan port yang diinginkan
      open: true, // Membuka browser otomatis saat server dijalankan
      hot: true,  // Aktifkan Hot Module Replacement (HMR)
      historyApiFallback: true, // Menangani routing untuk aplikasi SPA
    },
  });
};
