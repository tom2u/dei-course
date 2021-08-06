
import Layout from '../../components/Layout';
import ResourceList from '../../components/ResourceList';
import { useUser } from '@auth0/nextjs-auth0';

const Resources = ({ resourceList }) => {
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
        <>
          <h2>Resource List Page</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
            quisquam molestiae voluptate! Quasi voluptate totam expedita
            obcaecati, consectetur consequuntur voluptates, corrupti molestiae
            saepe omnis deleniti distinctio, suscipit reprehenderit explicabo
            nesciunt?
          </p>
          {/* <ResourceList resources={resourceList} /> */}
        </>
      )}
    </Layout>
  );
};


export default Resources;
