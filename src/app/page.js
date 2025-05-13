import AcmeGroup from "./AcmeGroup/Acme";
import AcmeVisionSection from "./AcmeVision/Acmevision";
import Blog from "./Blog/Blog";
import FinancialBanner from "./Financial/FinancialBanner";
import Footer from "./Footer/footer";
import FounderCard from "./FounderCard/FounderCard";
import Header from "./Header/header";
import InvestorsSection from "./InvestorsSection/InvestorsSection";
import SimpleSlider from "./Slider/slider";


export default function Home() {
  return (
    <>
      <Header />
      <InvestorsSection />
      <FounderCard />
      <FinancialBanner />
      <AcmeVisionSection />
      <AcmeGroup />
      <Blog />
      <SimpleSlider />      
      <Footer />
    </>
  );
}
