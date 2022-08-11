import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";
import { useMatomo } from "../services/matomo.service";

export function HomePage() {
  const { setNewPage } = useMatomo();
  setNewPage("/", "default");
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="unknown" />
      <FooterSection />
    </>
  );
}
