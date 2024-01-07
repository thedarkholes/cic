import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: This page could not be found.",
  description: "404: This page could not be found.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
