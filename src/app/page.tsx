import dynamic from "next/dynamic";
const HomeSlider = dynamic(() => import("@/components/layout/HomeSlider"));
import BusinessInfo from "@/components/layout/BusinessInfo";
import { Suspense } from "react";
import Loader from "@/components/common/Loader";

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

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader className="" />}>
        <HomeSlider />
      </Suspense>
      <BusinessInfo />
      <AboutSection />
      <ServicesSection />
      <HomeMenu className="pt-24" />
      <ContactSecton className="pt-12" />
    </>
  );
}
