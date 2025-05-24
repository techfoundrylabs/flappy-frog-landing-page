import { createConfig, http } from "wagmi";
import { base, baseSepolia, type Chain } from "wagmi/chains";

import { IS_MAINNET } from "@/config/constants";

const TESTNET_CHAINS: [Chain, ...Chain[]] = [baseSepolia];
const MAINNET_CHAINS: [Chain, ...Chain[]] = [base];

const TESTNET_TRANSPORT = { [baseSepolia.id]: http() };
const MAINNET_TRANSPORT = { [base.id]: http() };

const CHAINS = IS_MAINNET ? MAINNET_CHAINS : TESTNET_CHAINS;
const TRANSPORT = IS_MAINNET ? MAINNET_TRANSPORT : TESTNET_TRANSPORT;

export const wagmiConfig = createConfig({
  chains: [...CHAINS],
  transports: {
    ...TRANSPORT,
  },
});
