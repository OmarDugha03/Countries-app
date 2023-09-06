import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "@components/Providers";
import Navbar from "@components/Navbar";
import dynamic from "next/dynamic";
import classnames from "classnames";
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
          "transition-colors bg-white selection:text-rose-600 selection:bg-black dark:bg-slate-900 text-slate-900 dark:text-slate-50",
          montserrat
        )}>
        <Providers>
          <NavBar>{children}</NavBar>
        </Providers>
      </body>
    </html>
  );
}
