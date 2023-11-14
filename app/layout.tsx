import "@/app/ui/global.css";
import { notoSansJP } from "@/app/ui/fonts";

export default function RootLayout({
  // 一番根本
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}
