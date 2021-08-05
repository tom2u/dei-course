import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

import ImageWrapper from '../ImageWrapper';

import styles from './singleResource.module.scss';

const SingleResource = ({ resource }) => {
  const transformContent = (content) => {
    return unified()
      .use(parse)
      .use(remark2react, {
        remarkReactComponents: {
          img: ImageWrapper,
        },
      })
      .processSync(content).result;
  };
  return (
    <section className={styles['single-resource']}>
      <h2>{resource.title}</h2>
      {transformContent(resource.content)}
    </section>
  );
};

export default SingleResource;
