import Layout from "../../components/Layout";
import ResourceList from "../../components/ResourceList";
import { useUser } from "@auth0/nextjs-auth0";
import { getResourceList } from "../../utils/fetch-resources";

const metadata = {
  pageTitle: "Resources || DEI and Allyship Course",
  description:
    "Saga Education's DEI and Allyship course is a free guide to building a more inclusive and equitable product for both your end users and company internally.",
};

const Resources = ({ resourceList }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout {...metadata}>
      {!user || error ? (
        <>
          <h2>You need to be logged in!</h2>
          {error && <p>{error}</p>}
        </>
      ) : (
        <ResourceList resources={resourceList} />
      )}
    </Layout>
  );
};

// add getStaticProps
export const getStaticProps = ({ locale }) => {
  const resourceList = getResourceList(locale);

  return {
    props: {
      resourceList,
    },
  };
};

export default Resources;
