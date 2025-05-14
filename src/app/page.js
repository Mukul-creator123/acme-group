import AcmeGroup from "./AcmeGroup/Acme";
import AcmeVisionSection from "./AcmeVision/Acmevision";
import Blog from "./Blog/Blog";
import Slider from "./CardSlider/Slider";
import FinancialBanner from "./Financial/FinancialBanner";
import Footer from "./Footer/footer";
import FounderCard from "./FounderCard/FounderCard";
import Header from "./Header/header";
import InvestorsSection from "./InvestorsSection/InvestorsSection";
import SimpleSlider from "./Slider/slider";
import Slider2 from "./Slider2/slider"

export default function Home() {
  return (
    <>
      <Header />
      <InvestorsSection />
      <FounderCard />
      <FinancialBanner />
      <AcmeVisionSection />
      <AcmeGroup />
      <SimpleSlider />   
      <Blog/>
      <Slider2/>   
      <Footer />
    </>
  );
}
