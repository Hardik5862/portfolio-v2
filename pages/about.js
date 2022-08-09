import Head from "next/head";
import AboutPage from "../components/About/About.component";

import sanityClient from "../helpers/sanityClient";

export default function About({ author }) {
  return (
    <>
      <Head>
        <title>Hardik Sachan | About</title>
      </Head>

      <AboutPage author={author} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const author = await sanityClient.fetch(
      `*[_type == "author"]{
        title,
        bio,
        image{
          asset->{
            _id,
            url,
          },
          alt
        }
      }`
    );

    return {
      props: {
        author,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
