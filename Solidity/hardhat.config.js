require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const INFURA_API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    networks: {
        Amoy: {
            url: `https://polygon-amoy.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [PRIVATE_KEY],
        },
        Sepolia :{
            url:`https://blast-sepolia.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [PRIVATE_KEY],
        },
        SepoliaAlchemy :{
            url:`https://eth-sepolia.g.alchemy.com/v2/jVJF48RILMprhnH8kzCrdP_4uorv1cqN`,
            accounts: [PRIVATE_KEY],

        }
    },
    etherscan: {
        apiKey: {
            Amoy: "WIGNZCS5ZD4372GZZ6QIEZQR4BVZIC4D7I",
        },
        customChains: [
          {
            network: "Amoy",
            chainId: 80002,
            urls: {
              apiURL: "https://rpc-amoy.polygon.technology/",
              browserURL: "https://www.oklink.com/amoy"
            }
          }
        ]
      }
};
