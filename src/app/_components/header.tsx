"use client";

import { Info } from "lucide-react";

import { Loader } from "@/components/loader";
import { useGetTreasuryPoolData } from "@/hooks/use-treasury-pool";

const COIN_SYMBOL = "ETH";

export const Header = () => {
  const { formattedTreasury, isLoading } = useGetTreasuryPoolData();

  if (isLoading) return <Loader className="text-sm" />;

  return (
    <header className="flex w-full flex-col px-2 py-4 text-center text-white/90 md:pt-2">
      <div className="flex w-full flex-row items-center justify-center gap-x-2">
        <span className="text-sm md:text-base">Treasury pool:</span>
        <span className="text-sm md:text-base">
          {parseFloat(formattedTreasury).toFixed(4)}
        </span>
        <span className="text-sm md:text-base">{COIN_SYMBOL}</span>
      </div>
      <div className="flex w-full items-center justify-center space-x-2">
        <span className="text-xs">Ends in</span>
        <button className="cursor-pointer">
          <Info size={18} />
        </button>
      </div>
    </header>
  );
};
