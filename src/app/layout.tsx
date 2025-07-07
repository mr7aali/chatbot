import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppContextProvider } from "../util/ContextProvider";
import { Toaster } from "react-hot-toast";
import PrelineScript from "@/util/PrelineScript";
import { UIProvider } from "@/util/UIProvider";
import Chatboot from "@/components/layout/Chatboot";
import { Josefin_Sans, Nothing_You_Could_Do } from "next/font/google";

// Configure Josefin Sans
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-josefin-sans",
});

// Configure Nothing You Could Do
const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-nothing-you-could-do",
});

export const metadata: Metadata = {
  title: "Slice Savvy: Order Delicious Pizzas Online",
  description:
    "Welcome to PizzaFiesta, where every order is a celebration of flavors!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${nothingYouCouldDo.variable} scroll-smooth dark`}
    >
      <body className="font-poppins bg-repeat bg-fixed bg-[url('/assets/bg_dark.jpg')] ">
        <UIProvider>
          <main>
            <AppContextProvider>
              <Toaster />
              <Header />
              {children}
              {/* <Chatboot /> */}
              <Footer />
            </AppContextProvider>
          </main>
        </UIProvider>
        <PrelineScript />
      </body>
    </html>
  );
}
