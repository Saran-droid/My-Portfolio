import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saranragav J U - AI/ML Engineer",
  description: "AI/ML Engineer specializing in LLM agents, agentic RAG pipelines, and intelligent systems. 7+ months of experience in NLP, semantic retrieval, and production-grade AI applications.",
  keywords: ["AI Engineer", "ML Engineer", "LangGraph", "LangChain", "RAG", "NLP", "Machine Learning", "Deep Learning"],
  authors: [{ name: "Saranragav J U" }],
  openGraph: {
    title: "Saranragav J U - AI/ML Engineer",
    description: "Building production-grade intelligent systems with LLM agents and agentic RAG pipelines",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
