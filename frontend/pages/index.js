import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <h4 className=" font-semibold">Hello, world!</h4>
            <button className="btn btn-primary">Button</button>
        </main>
    );
}
