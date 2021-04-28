const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const StakGallery = await hre.ethers.getContractFactory("StakGallery");
  const GSTAK = await StakGallery.deploy();

  await GSTAK.deployed();

  console.log("StakGallery deployed to:", GSTAK.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
