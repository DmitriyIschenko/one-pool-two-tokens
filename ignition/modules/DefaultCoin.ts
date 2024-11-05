// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DefaultCoinModule = buildModule("DefaultCoinModule", (m) => {
  const defaultCoin = m.contract("DefaultCoin", [m.getParameter("name"), m.getParameter("symbol")]);

  return { defaultCoin };
});

export default DefaultCoinModule;
