import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppContextProvider } from "../util/ContextProvider";
import { Toaster } from "react-hot-toast";
import PrelineScript from "@/util/PrelineScript";
import { UIProvider } from "@/util/UIProvider";
import Chatboot from "@/components/layout/Chatboot";


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
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins bg-[url('/assets/bg_dark.jpg')] bg-repeat bg-fixed">
        <UIProvider>
          <main>
            <AppContextProvider>
              <Toaster />
              <Header />
              {children}
              <Chatboot />
              <Footer />
            </AppContextProvider>
          </main>
        </UIProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
