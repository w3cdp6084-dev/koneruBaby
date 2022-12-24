import styles from "../styles/Card.module.scss";
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <div className={styles.wrap}>
        <ul className={styles.card}>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
              <div>{blog.category.name}</div>
            </li>
          ))}
        </ul>
      </div>
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