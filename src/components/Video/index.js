import styles from './video.module.scss';

const Video = ({ videoSrc = '/assets/videos/demo-video.mp4', children }) => {
  return (
    <figure className={styles['video-wrapper']}>
      <video
        className={styles['video-wrapper__video']}
        muted
        controls
        src={videoSrc}
      >
        {children}
      </video>
    </figure>
  );
};

export default Video;
