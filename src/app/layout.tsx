import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "./_components/ThemeProvider";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AniChart-Unofficial",
  description: "Browse seasonal anime and see when upcoming episodes air.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
