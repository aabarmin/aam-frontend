import "@/app/globals.css";
import { StateProvider } from "@/app/hooks/StateProvider";
import { isOnboardingCompleted } from "@/lib/onboardingActions";
import { getCurrentUser } from "@/lib/userActions";
import { Box, CssVarsProvider } from "@mui/joy";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "1111 Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login')
  }
  const onboarded = await isOnboardingCompleted(user);
  if (!onboarded) {
    redirect('/onboarding');
  }

  return (
    <CssVarsProvider>
      <Box sx={{ height: '100vh' }}>
        <StateProvider>
          {children}
        </StateProvider>
      </Box>
    </CssVarsProvider>
  );
}
