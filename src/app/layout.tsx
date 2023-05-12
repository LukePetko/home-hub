import Link from "next/link";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import NavBar from "./NavBar";

const notoSans = Noto_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <div className="flex">
          <NavBar navClasses="collapse md:visible lg:w-1/5 md:w-1/4 fixed" />
          <div className="md:pl-[25%] lg:pl-[20%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
