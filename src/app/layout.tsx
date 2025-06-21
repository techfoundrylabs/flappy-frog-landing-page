import "@/styles/globals.css";

import { type Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

import background from "@/assets/img/flappy-frog-bg.png";
import { Providers } from "@/components/providers";

const press_start_2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FlappyFrog",
    description:
      "Fly, dodge, and dominate! Join the flight frenzy on the Base chain. Collect points, beat the pipes, and climb to the top for a chance to win the Treasury Pool in Ethereum (ETH). Connect your wallet and take off!",
    openGraph: {
      title: "FlappyFrog",
      description:
        "Fly, dodge, and dominate! Join the flight frenzy on the Base chain. Collect points, beat the pipes, and climb to the top for a chance to win the Treasury Pool in Ethereum (ETH). Connect your wallet and take off!",

      images: [{ url: "https://flappyfrog.xyz/flappyfrog.png" }],
    },
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: "https://miniapp.flappyfrog.xyz/flappyfrog.png",
        button: {
          title: `Launch Flappy Frog`,
          action: {
            type: "launch_frame",
            name: "Flappy Frog",
            url: "https://miniapp.flappyfrog.xyz",
            splashImageUrl: "https://miniapp.flappyfrog.xyz/logo.png",
            splashBackgroundColor: "#2777bb",
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${press_start_2P.className}`}>
      <body cz-shortcut-listen="true">
        <Providers>
          <div
            className={`flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-repeat`}
            style={{ backgroundImage: `url(${background.src})` }}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
