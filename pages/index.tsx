import styles from "../styles/Card.module.scss";
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.wrap}>
          <ul className="columns-2 md:columns-3 lg:columns-4">
            {blog.map((blog) => (
          <Link href={`/blog/${blog.id}`}>
            <li key={blog.id}>
              <img
                src={blog.eyecatch.url}
                alt="Picture of the author"
                width="100%"
                height="100%"
              />
              {blog.title}
              <div className="text-3xl">{blog.category.name}</div>
            </li>
          </Link>
            ))}
          </ul>
          
        </div>
      </main>
    </div>
  );
}


export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};