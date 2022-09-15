import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import { useMatomo } from "../services/matomo.service";

export function ContactPage() {
  const { setNewPage } = useMatomo();
  setNewPage("/contact", "contact");
  return (
    <>
      <HeaderSection />
      <h2>Send an email to contact@gladia.io</h2>
      <FooterSection />
    </>
  );
}
