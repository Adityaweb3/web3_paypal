
const hre = require("hardhat");

async function main() {
  
  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();

  

  console.log("Paypal deployed to ", paypal.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
