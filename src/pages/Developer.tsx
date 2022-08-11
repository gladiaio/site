import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";
import { useMatomo } from "../services/matomo.service";

export function DeveloperPage() {
  const { setNewPage } = useMatomo();
  setNewPage("/developer", "developer");
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="developer" />
      <FooterSection />
    </>
  );
}
