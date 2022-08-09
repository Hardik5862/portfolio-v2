import Head from "next/head";
import ProjectsPage from "../components/Projects/Projects";

import sanityClient from "../helpers/sanityClient";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Hardik Sachan | Projects</title>
      </Head>

      <ProjectsPage projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const projects = await sanityClient.fetch(
      `*[_type == "post"]{
        title,
        body,
        tags,
        links,
        mainImage{
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
        projects,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
