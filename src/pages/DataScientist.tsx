import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";

export function DataScientistPage() {
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="data-scientist" />
      <FooterSection />
    </>
  );
}
