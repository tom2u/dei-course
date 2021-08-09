import Layout from "../../components/Layout";
import SingleResource from "../../components/SingleResource";
import { useUser } from "@auth0/nextjs-auth0";
import {
  getAllResourceSlugs,
  getResourceData,
} from "../../utils/fetch-resources";

const Resource = ({ resourceData }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      {!user || error ? (
        <>
          <h2>You need to be logged in!</h2>
          {error && <p>{error}</p>}
        </>
      ) : (
        <SingleResource resource={resourceData} />
      )}
    </Layout>
  );
};

// add getStaticPaths
export const getStaticPaths = ({ locales }) => {
  const paths = getAllResourceSlugs(locales);

  return {
    paths,
    fallback: true,
  };
};

// add getStaticProps
export const getStaticProps = async ({ params, locale }) => {
  const resourceData = await getResourceData(params.slug, locale);

  return {
    props: {
      resourceData,
    },
  };
};

export default Resource;
