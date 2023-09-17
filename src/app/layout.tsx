"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Providers, Search } from "@components/index";
import dynamic from "next/dynamic";
import classnames from "classnames";
import { motion as m, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });
const NavBar = dynamic(() => import("../../components/Navbar"), { ssr: false });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classnames(
          "transition-colors bg-white selection:bg-cyan-700  dark:bg-slate-900 text-slate-900 dark:text-slate-50",
          montserrat
        )}>
        <m.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.15 }}
          exit={{ opacity: 0 }}>
          <AnimatePresence>
            <Providers>
              <div className="z-[1000]">
                <NavBar>
                  {" "}
                  <Search />
                  {children}
                </NavBar>
              </div>
            </Providers>
          </AnimatePresence>
        </m.div>
      </body>
    </html>
  );
}
