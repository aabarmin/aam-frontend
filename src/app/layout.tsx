import { Box, CssVarsProvider } from "@mui/joy";
import type { Metadata } from "next";
import "./globals.css";

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
          <Box sx={{ height: '100vh' }}>
            {children}
          </Box>
        </CssVarsProvider>
      </body>
    </html>
  );
}