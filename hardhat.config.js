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
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/XzHMMRUrG6QlFA7A_c34TyzicD625Kjq",
      accounts: [`c63955bd22f96e8849167c2dc2ee62526fc2a64ed58720da666fd0df79f49e4e`],

    },

  }
};
