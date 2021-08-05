import Link from 'next/link';
import Image from 'next/image';
import styles from './resourceList.module.scss';
import { useTheme } from '../../utils/ThemeProvider';

const ResourceList = ({ resources = [] }) => {
  const { theme } = useTheme();
  return (
    <section className={styles['resource__grid']}>
      {resources.map((resource) => {
        return (
          <div
            key={resource.link}
            className={`${styles['resource__item']} ${
              theme === 'DEFAULT'
                ? styles['resource__item--default']
                : styles['resource__item--dark']
            }`}
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
                className={`${styles['resource__item-data__inner']} ${
                  theme === 'DEFAULT'
                    ? styles['resource__item-data__inner--default']
                    : styles['resource__item-data__inner--dark']
                }`}
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
                    className={`${styles['resource__item-button']} ${
                      theme === 'DEFAULT'
                        ? styles['resource__item-button--default']
                        : styles['resource__item-button--dark']
                    }`}
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