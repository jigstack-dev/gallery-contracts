
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');

const dotenv = require('dotenv');
dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.7.1',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      forking: {
        url: process.env.FORKING_ENDPOINT,
      }
    },
    goerli: {
      url:
      process.env.GOERLI_ENDPOINT,
      accounts: [process.env.DEPLOY_ACCOUNT_PRIVATE_KEY],
    },
    rinkeby: {
      url:
      process.env.RINKEBY_ENDPOINT,
      accounts: [process.env.DEPLOY_ACCOUNT_PRIVATE_KEY],
    },
    kovan: {
      url:
      process.env.KOVAN_ENDPOINT,
      accounts: [process.env.DEPLOY_ACCOUNT_PRIVATE_KEY],
    },
    bsc_testnet: {
      url: process.env.BSC_TESTNET_ENDPOINT,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.DEPLOY_ACCOUNT_PRIVATE_KEY],
    },
    bsc_mainnet: {
      url: process.env.BSC_ENDPOINT,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.DEPLOY_ACCOUNT_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.MAINNET_ENDPOINT,
      accounts: [process.env.DEPLOY_ACCOUNT_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};