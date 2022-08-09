import Head from "next/head";

import sanityClient from "../helpers/sanityClient";

export default function Skills({ skills }) {
  return (
    <>
      <Head>
        <title>Hardik Sachan | Skills</title>
      </Head>
    </>
  );
}

export async function getStaticProps() {
  try {
    const skills = await sanityClient.fetch(
      `*[_type == "category"]{
        languages,
        webdevelopment,
        graphicdesign,
        certificates
      }`
    );

    return {
      props: {
        skills,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
