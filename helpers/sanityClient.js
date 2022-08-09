import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "z683g0ok",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
