import { cn } from "@/config/utils";

interface LoaderProps {
  className?: string | undefined;
}
export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <h1 className={cn("text-3xl text-white/90", className)}>Loading...</h1>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};
