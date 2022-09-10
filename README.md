# Intro to Ethereum Smart Contracts

## Prerequisites

* node.js (https://nodejs.org/en/)
* metamask (https://metamask.io/)

## How to run project
```shell
#run svelte front app (http://localhost:8080 - by defult)
npm run dev
```
```shell
#run blockchain locally using hardhat
npx hardhat node
```
```shell
#deploy contracts to local blockchain
npx hardhat run scripts/deploy.js --network localhost
```
```shell
#deploy contracts to other networks defined in hardhat.config.js file
npx hardhat run scripts/deploy.js --network <network name>
```
---
## How to create a new fresh project using hardhat + svelte(for frontend)

1. Initialize project
```shell
#Initialize Svelte project (you can use any other frontend framework if you want, I just like svelte)
npx degit sveltejs/template <project name>
cd <project name>
#install required libraries
npm install ethers hardhat chai @nomiclabs/hardhat-ethers @nomicfoundation/hardhat-toolbox
```
2. Delete "scripts" folder and "readme.md" file (there's a conflict of file names preventing initialization of hardhat project)
```shell
#initialize hardhat project
npx hardhat
#(optional) install openzeppeling contracts if you wish to use them
npm install @openzeppelin/contracts
#install rollup/plugin-json
npm i @rollup/plugin-json
```
3. add below import to rollup.config.js file:  
```javascript
import json from "@rollup/plugin-json";
```
4. add "json()" inside rollup.config.js file
```javascript
{
    ...
    commonjs(), //<-- ctrl + f for commonjs() and add json() below
    json(),
    ...
}
```

5. replace module.exports within hardhat.config.js file to:
```javascript
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
            url: "gateway-url (i.e infura, alchemy)",
            accounts: [`account private key`],

        },

    }
};
```