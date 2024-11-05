// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StableCoinModule = buildModule("StableCoinModule", (m) => {
  const stableCoin = m.contract("StableCoin", [m.getParameter("name"), m.getParameter("symbol")]);

  return { stableCoin };
});

export default StableCoinModule;
