import Link from "next/link";

const TECH_FOUNDRY_LABS_URL = "https://techfoundrylabs.xyz";

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center space-x-1 py-4 text-[0.6rem] text-white/90 lg:pb-4">
      <span>Developed by</span>
      <Link
        href={TECH_FOUNDRY_LABS_URL}
        target="_blank"
        className="underline underline-offset-2"
      >
        TechFoundryLabs
      </Link>
    </footer>
  );
};
