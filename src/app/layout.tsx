import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/inter';
import { CssVarsProvider, Sheet } from "@mui/joy";
import Navigation from "./components/Nagivation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "1111 Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssVarsProvider>
          <Navigation />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}
