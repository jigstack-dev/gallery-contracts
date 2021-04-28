const { ethers, upgrades } = require("hardhat");

async function main() {
  // !ACTION: DEFINE THE CONTRACT CURRENT ADDRESS & NAME
  const ContractAddress = '0x123'
  const ContractName = 'StakGalleryUpgradable'

  // Get new Contract
  const ContractV2 = await ethers.getContractFactory(ContractName);
  // Deploy the campaign factory at old address
  // by new Contract
  const DeployV2 = await upgrades.upgradeProxy(ContractAddress, ContractV2);
  console.log("Contract upgraded at", DeployV2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
