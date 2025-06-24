import { formatUnits } from "viem";
import { useReadContract } from "wagmi";

import { FlappyFrogABI } from "@/config/abi/flappy-frog-abi";
import { TREASURY_ADDRESS } from "@/config/constants";

export const useGetTreasuryPoolData = () => {
  const { data, isLoading, isSuccess } = useReadContract({
    address: TREASURY_ADDRESS,
    abi: FlappyFrogABI,
    functionName: "getGameInfo",
    query: {
      staleTime: Infinity,
      refetchInterval: 600_000,
    },
  });
  const contractResponse = Array.isArray(data)
    ? (data as [bigint, bigint, bigint, bigint])
    : [0n, 0n, 0n, 0n];

  const [treasury, teamRevenue, gameEnd, gameNumber] = contractResponse;
  const formattedTreasury = formatUnits(treasury ?? 0n, 6);
  const formattedTeamRevenue = formatUnits(teamRevenue ?? 0n, 6);
  const gameEndMs = gameEnd ? Number(gameEnd) : 0;
  return {
    treasury,
    formattedTreasury,
    gameEndMs,
    formattedTeamRevenue,
    gameNumber,
    isLoading,
    isSuccess,
  };
};
