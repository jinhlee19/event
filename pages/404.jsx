import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className="flex justify-center items-center space-y-4">
        <h1>404</h1>
        <h2>Sorry, there is nothing here.</h2>
      </div>
    </Layout>
  );
}
