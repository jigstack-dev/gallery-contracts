const { ethers, upgrades } = require('hardhat');

const main = async () => {
  // Get contract
  const StakGallery = await ethers.getContractFactory("StakGalleryUpgradable");
  // Deploy contract proxy
  const ProxyContract = await upgrades.deployProxy(StakGallery);
  console.log('Deploying contract...');
  // Wait for campaign factory deploy success
  await ProxyContract.deployed();
  // Log the address
  console.log('ProxyCampaignFactory deployed to:', ProxyContract.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
