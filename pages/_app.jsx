import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
