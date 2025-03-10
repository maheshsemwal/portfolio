import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`preventhydration`}
      >
        <ThemeProvider
        //@ts-ignore
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
