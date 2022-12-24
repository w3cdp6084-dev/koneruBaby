import Link from "next/link";
import { client } from "../libs/client";

function Card({blog}) {
  return (
    <div>
    <ul>
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
  )
}
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog" });
  
    return {
      props: {
        blog: data.contents,
      },
    };
  };
export default Card