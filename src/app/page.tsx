import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { MainCointent } from "@/app/_components/main-content";
import { TreasuryModal } from "@/app/_components/treasury-modal";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainCointent />
      <Footer />
      <TreasuryModal />
    </>
  );
}
