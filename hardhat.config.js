require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // rinkeby: {
    //   url: "gateway-uri (i.e alchemy, infura)",
    //   accounts: [`account private key`],
    //
    // },

  }
};
