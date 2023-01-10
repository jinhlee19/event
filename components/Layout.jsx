import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Blog | Agency Blog for Design and Development",
  description: "Sharing valuable memories",
  keyword: "IT, Design, Development, PM, Blog",
};
