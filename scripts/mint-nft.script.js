const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const StakGallery = await hre.ethers.getContractFactory("StakGallery");
  const Deployment = await StakGallery.attach("0x70F6001b57E35B59b9f65baA1b1F285A6Ab3c195")

  const Mint = await Deployment.MintNFT("0xefA3b72BFFB5383Ff173785C6F6c10f96f08000F", "https://opensea-creatures-api.herokuapp.com/api/creature/3");


  console.log("NFT deployed to:", Mint);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
