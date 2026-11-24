import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Overflow",
  description: "An app made to manage your confusing tasks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
