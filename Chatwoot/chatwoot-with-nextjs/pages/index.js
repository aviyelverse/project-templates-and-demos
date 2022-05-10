import Head from "next/head";
import useSWR from "swr";
import styles from "../styles/Home.module.css";
import ChatwootWidget from "../components/ChatwootWidget";

export default function Home() {
  // Change this URL. The posts are fetched from /api/posts (there are just demo posts for now)
  const url = "http://localhost:3000/api/posts";

  // The useSWR hook fetches the data from the URL and also does a little caching
  const { data, error } = useSWR(url, async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });
  // The hook might return an error, so we need to check for it
  if (error) return <p>Something went wrong</p>;
  if (!data) return <p>Loading...</p>;

  // The data is now available, so we can use it
  const { posts } = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs chatwoot integration</title>
        <meta name="description" content="Nextjs chatwoot integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nodejs.org">Nextjs Blog</a>
        </h1>

        {/* Mapping through the posts in a grid */}
        <div className={styles.grid}>
          {posts.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.card_title} key={item}>
                {item.title}
              </h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        {/* The ChatwootWidget component that we exported (it can be placed anywhere)*/}
        <ChatwootWidget />
      </footer>
    </div>
  );
}
