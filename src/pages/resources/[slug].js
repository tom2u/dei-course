import Layout from '../../components/Layout';
import SingleResource from '../../components/SingleResource';

const Resource = ({ resourceData }) => {
  return (
    <Layout>
      <h2>Single Resource Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex
        voluptatem, autem necessitatibus libero voluptates commodi aliquam
        explicabo laborum quae! Voluptatum placeat nesciunt dolorem itaque,
        officia obcaecati? Delectus, quibusdam blanditiis.
      </p>
      {/* <SingleResource resource={resourceData} /> */}
    </Layout>
  );
};

export default Resource;
