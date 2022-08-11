import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";
import { useMatomo } from "../services/matomo.service";

export function DataScientistPage() {
  const { setNewPage } = useMatomo();
  setNewPage("/data-scientist", "data-scientist");
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="data-scientist" />
      <FooterSection />
    </>
  );
}
