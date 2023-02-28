import "bootstrap/dist/css/bootstrap.min.css";
import BasicNavbar from "@/components/BasicNavbar";

export default function App({ Component, pageProps }) {
    return (
        <>
            <BasicNavbar />
            <Component {...pageProps} />
        </>
    );
}
