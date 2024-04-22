import MainLayout from "@/components/reuseable/MainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
