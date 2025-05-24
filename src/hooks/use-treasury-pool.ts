import { formatEther } from "viem";
import { useReadContract } from "wagmi";

import { FlappyFrogABI } from "@/config/abi/flappy-frog-abi";
import { TREASURY_ADDRESS } from "@/config/constants";

export const useGetTreasuryPoolData = () => {
  const { data, isLoading } = useReadContract({
    address: TREASURY_ADDRESS,
    abi: FlappyFrogABI,
    functionName: "getTreasuryBalance",
    query: {
      staleTime: Infinity,
      refetchInterval: 5000,
    },
  });
  const treasury = data as bigint;
  const formattedTreasury = formatEther(treasury ?? 0n);
  return { treasury, formattedTreasury, isLoading };
};
