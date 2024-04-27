import axios from "axios";
import MainLayout from "@/components/reuseable/MainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    // set axios default baseURL
    axios.defaults.baseURL = "https://safekart.onrender.com";
    // axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.withCredentials = true;
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}
