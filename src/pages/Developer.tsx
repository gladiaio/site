import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";

export function DeveloperPage() {
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="developer" />
      <FooterSection />
    </>
  );
}
