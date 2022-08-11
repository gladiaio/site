import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { useMatomo } from "../services/matomo.service";

export function CguPage() {
  const { setNewPage } = useMatomo();
  setNewPage("/cgu", "cgu");
  return (
    <>
      <HeaderSection />
      <h2>CGU</h2>
      <FooterSection />
    </>
  );
}
