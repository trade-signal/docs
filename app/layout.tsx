import { Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";

import logo from "../public/logo.svg";

import "./globals.css";

export const metadata = {
  title: "交易信标 | TradeSignal",
  description:
    "提供实时市场数据和分析功能，助您捕捉市场脉动，做出精准投资决策。",
  keywords: [
    "交易信标",
    "TradeSignal",
    "交易信号",

    "A股分析",
    "A股行情",
    "股票数据",
    "实时行情",

    "量化交易",
    "技术分析",
    "选股策略",
    "市场分析",

    "实时数据",
    "行情数据",
    "股市数据",
    "市场指标"
  ],
  authors: [{ name: "TradeSignal Team" }],
  openGraph: {
    title: "交易信标 | TradeSignal",
    description: "整合多维度市场数据，提供专业的投资分析工具",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    siteName: "交易信标 | TradeSignal"
  },
  robots: {
    index: true,
    follow: true
  }
};

const navbar = (
  <Navbar
    logo={
      <>
        <Image src={logo} alt="Trade Signal" width={24} height={24} />
        <span className="ml-2 font-bold">Trade Signal</span>
      </>
    }
  />
);

const search = <Search placeholder="搜索..." />;

const footer = (
  <footer className="flex justify-center items-center mb-4 h-6 text-sm text-gray-500 dark:text-gray-400">
    MIT {new Date().getFullYear()} ©{" "}
    <a href="https://github.com/trade-signal" target="_blank">
      Trade Signal
    </a>
    .
  </footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo.src} />
      </Head>
      <body>
        <Layout
          sidebar={{
            autoCollapse: true
          }}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          search={search}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
