import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-white/90">
      <h2 className="text-2xl">Not Found</h2>
      <p className="text-sm">Could not find requested resource</p>
      <Link href="/" className="text-sm underline underline-offset-4">
        Return Home
      </Link>
    </div>
  );
}
