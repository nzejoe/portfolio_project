import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Hero from "@/components/home/Hero";

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <Hero />
        </main>
    );
}
