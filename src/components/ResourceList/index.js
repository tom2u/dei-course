import Link from 'next/link';
import Image from 'next/image';
import styles from './resourceList.module.scss';

const ResourceList = ({ resources = [] }) => {
  return (
    <section className={styles['resource__grid']}>
      {resources.map((resource) => {
        return (
          <div
            key={resource.link}
            className={styles['resource__item']}
          >
            <Image
              src={resource.featuredImage}
              alt={`Select to see this resource`}
              className={styles['resource__item-image']}
              layout='fill'
              objectFit='cover'
            />
            <div className={styles['resource__item-data']}>
              <div
                className={styles['resource__item-data__inner']}
              >
                <Link href={resource.link} locale={locale}>
                  <a>
                    <h3 className={styles['resource__item-link']}>
                      {resource.title}
                    </h3>
                  </a>
                </Link>
                <p>{resource.description}</p>
                <Link href={resource.link}>
                  <a
                    className={styles['resource__item-button']}
                  >
                    View This Resource
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ResourceList;