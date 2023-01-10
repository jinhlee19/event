import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Image from "next/image";

export default function postPage({ post }) {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-12 px-16">
        <Image src={post.imageUrl} alt="" width={960} height={600} />
        <h4 className="card__subtitle text-sky-500 text-sm">{post.category}</h4>
        <h1>{post.title}</h1>
        <div className="flex justify-center pb-4">
          <hr className="divider--sm w-8" />
        </div>
        <time>{post.time}</time>
        <p>{post.content}</p>
      </section>
      <div className="text-center my-12">
        <button className="btn btn--red">Go Back</button>
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/posts/${slug}`);
  const posts = await res.json();
  console.log(slug);

  return {
    props: { post: posts[0] },
  };
}
