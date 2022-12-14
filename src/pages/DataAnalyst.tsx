import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { JoinBetaSection } from "../components/JoinBetaSection";
import { useMatomo } from "../services/matomo.service";

export function DataAnalystPage() {
  const { setNewPage } = useMatomo();
  setNewPage("/data-analyst", "data-analyst");
  return (
    <>
      <HeaderSection />
      <JoinBetaSection profile="data-analyst" />
      <FooterSection />
    </>
  );
}
