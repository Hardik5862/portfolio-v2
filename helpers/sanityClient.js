import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "z683g0ok",
  dataset: "production",
  useCdn: false,
});
