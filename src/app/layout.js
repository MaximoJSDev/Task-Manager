import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "./components/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "Gestor de tareas. Redefine la eficiencia y organización con un sistema basado en workshops. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="absolute top-0 -z-10 h-full w-full bg-[#fafafa]"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
        <div id="app" className="relative flex text-white">
          <aside className="py-7 bg-[#1d1f21]">
            <Aside />
          </aside>
          <main className="relative grow px-20 py-7 bg-[#101214]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
