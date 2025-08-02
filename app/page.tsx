import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                交易信标
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-4 text-4xl">
                TradeSignal
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              整合多维度市场数据，提供专业的投资分析工具。
              智能追踪市场动态，发现潜在投资机会，为您的每一个投资决策提供可靠的数据支撑。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Link
                href="/signal-feed"
                className="px-8 py-4 text-lg font-semibold border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-200 rounded-lg cursor-pointer"
              >
                立即体验
              </Link>
              <a
                href="https://github.com/trade-signal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors duration-200 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <SiGithub className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
