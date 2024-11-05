import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import {configDotenv} from "dotenv";
import {resolve} from "path";
configDotenv({ path: resolve(__dirname, "./.env") });

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks:{
    bsc:{
      url:"https://bsc-pokt.nodies.app",
      accounts:[process.env.PRIVATE_KEY as string]
    }
  }
};

export default config;
