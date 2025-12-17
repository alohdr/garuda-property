import { LanguageProvider } from "../context/LanguageContext";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
