import Layout from "../components/Layout";
import HomePageContent from "../components/HomePageContent";

const metadata = {
  pageTitle: "DEI and Allyship || Saga Education",
  description:
    "Saga Education's DEI and Allyship course is a free guide to building a more inclusive and equitable product for both your end users and company internally.",
};

const Home = () => {
  return (
    <Layout {...metadata}>
      <HomePageContent />
    </Layout>
  );
};

export default Home;
