import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./store";
const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sneakers",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
