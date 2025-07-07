import HomeSlider from "@/components/layout/HomeSlider";
import BusinessInfo from "@/components/layout/BusinessInfo";

const AboutSection = dynamic(() => import("@/components/layout/AboutSection"), {
  ssr: true,
});

const ServicesSection = dynamic(
  () => import("@/components/layout/ServicesSection")
);
const ContactSecton = dynamic(
  () => import("@/components/layout/ContactSection"),
  {
    ssr: false,
  }
);

const HomeMenu = dynamic(() => import("@/components/layout/HomeMenu"), {
  ssr: true,
});
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <BusinessInfo />
      <AboutSection />
      <ServicesSection />
      <HomeMenu className="pt-24" />
      <ContactSecton className="pt-12" />
    </>
  );
}
