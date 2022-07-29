import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";

export function HomePage() {
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="unknown" />
      <FooterSection />
    </>
  );
}
