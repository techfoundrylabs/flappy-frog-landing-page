"use client";

import { Info } from "lucide-react";

import { useTreasuryModal } from "@/app/_components/treasury-modal";
import { Loader } from "@/components/loader";
import { useCountdown } from "@/hooks/use-countdown";
import { useGetTreasuryPoolData } from "@/hooks/use-treasury-pool";

const COIN_SYMBOL = "ETH";

export const Header = () => {
  const { formattedTreasury, gameEndMs, isLoading, isSuccess } =
    useGetTreasuryPoolData();
  const { timeLeftFormatted, timeLeft } = useCountdown(gameEndMs);
  const { open } = useTreasuryModal();

  if (isLoading) return <Loader className="text-sm" />;

  return (
    <header className="top-0 flex w-full flex-col px-2 py-4 text-center text-white/90 md:pt-2 lg:absolute">
      {timeLeft > 0 && isSuccess ? (
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-row items-center justify-center gap-x-2">
            <span className="text-sm md:text-base">Treasury pool:</span>
            <span className="text-sm md:text-base">
              {parseFloat(formattedTreasury).toFixed(4)}
            </span>
            <span className="text-sm md:text-base">{COIN_SYMBOL}</span>
          </div>
          <div className="flex w-full items-center justify-center space-x-2">
            <span className="text-xs">Close in {timeLeftFormatted}</span>
            <button className="cursor-pointer" onClick={open}>
              <Info size={18} />
            </button>
          </div>
        </div>
      ) : (
        "Waiting for the next game round..."
      )}
    </header>
  );
};
