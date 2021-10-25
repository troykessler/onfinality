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
  // try it several times because error does not appear every time
  for (let i = 0; i < 50; i++) {
    // just a random read function from our contract
    const paused = await contract.paused();
    console.log(paused);
  }
};

main();

// OUR ERROR

/*
(node:61874) UnhandledPromiseRejectionWarning: Error: missing revert data in call exception (error={"reason":"missing response","code":"SERVER_ERROR","requestBody":"{\"method\":\"eth_call\",\"params\":[{\"to\":\"0xd1eae9cc4c0cc8d82c5800e2dae972a70f2c4d0d\",\"data\":\"0x5c975abb\"},\"latest\"],\"id\":47,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","serverError":{"code":"ECONNRESET","path":null,"host":"moonbeam-alpha.api.onfinality.io","port":443},"url":"https://moonbeam-alpha.api.onfinality.io/public"}, data="0x", code=CALL_EXCEPTION, version=providers/5.5.0)
    at Logger.makeError (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/logger/lib/index.js:199:21)
    at Logger.throwError (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/logger/lib/index.js:208:20)
    at checkError (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:76:16)
    at StaticJsonRpcProvider.<anonymous> (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:659:47)
    at step (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Users/troykessler/Desktop/onfinality/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:61874) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:61874) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
*/
