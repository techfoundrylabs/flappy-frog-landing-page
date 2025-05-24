"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "@/config/wagmi/wagmi-config";

interface WagmiProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: WagmiProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
