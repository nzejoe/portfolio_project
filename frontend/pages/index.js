import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Hero from "@/components/home/Hero";
import TopCategories from "@/components/home/TopCategories";
import TopSelling from "@/components/home/TopSelling";

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Hero />
            <TopCategories />
            <TopSelling />
        </main>
    );
}
