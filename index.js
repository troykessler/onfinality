const ethers = require("ethers");
const abi = require("./abi.json");

const contract = new ethers.Contract(
  "0xd1EAe9CC4C0cC8D82c5800e2dAE972A70f2C4d0d",
  abi,
  new ethers.providers.StaticJsonRpcProvider(
    "https://moonbeam-alpha.api.onfinality.io/public",
    {
      chainId: 1287,
      name: "moonbase-alphanet",
    }
  )
);

const main = async () => {
  for (let i = 0; i < 50; i++) {
    const paused = await contract.paused();
    console.log(paused);
  }
};

main();
