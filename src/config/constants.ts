import { env } from "@/env";

export const MINI_APP_URL = env.NEXT_PUBLIC_MINI_APP_URL;
export const TREASURY_ADDRESS =
  env.NEXT_PUBLIC_TREASURY_ADDRESS as `0x${string}`;
export const NETWORK = env.NEXT_PUBLIC_NETWORK;
export const IS_MAINNET = NETWORK === "mainnet";
export const IS_TESTNET = NETWORK === "testnet";
