
## Usage

### Pre Requisites

Before running any command, make sure to install dependencies:

```sh
$ yarn
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ npx hardhat compile
```


### Deploy 

Deploy the contracts to Hardhat Network:

```sh
$ npx hardhat run scripts/deploy-galery.script.js 
```

Deploy the contracts to a specific network, such as the Rinkeby testnet:

```sh
$ npx hardhat run scripts/deploy-galery.script.js --network rinkeby

```

You can mint NFTs by running
```sh
$ npx hardhat run scripts/mint-nft.script.js --network rinkeby

```

