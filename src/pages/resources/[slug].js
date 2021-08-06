import Layout from '../../components/Layout';
import SingleResource from '../../components/SingleResource';
import { useUser } from '@auth0/nextjs-auth0';

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
        <>
          <h2>Single Resource Page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            ex voluptatem, autem necessitatibus libero voluptates commodi
            aliquam explicabo laborum quae! Voluptatum placeat nesciunt dolorem
            itaque, officia obcaecati? Delectus, quibusdam blanditiis.
          </p>
          {/* <SingleResource resource={resourceData} /> */}
        </>
      )}
    </Layout>
  );
};

export default Resource;
