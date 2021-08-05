import { useTheme } from '../../utils/ThemeProvider';

import styles from './topBar.module.scss';

const TopBar = () => {
    const { theme, setTheme } = useTheme();
  
    return (
      <div className={styles['topbar']}>
        <div className={styles['topbar__wrapper']}>
          <button
            onClick={() =>
              setTheme({
                type: theme === 'DEFAULT' ? 'HIGH_CONTRAST' : 'DEFAULT',
              })
            }
          >
            {theme === 'DEFAULT' ? 'Default Theme' : 'High Contrast Theme'}
          </button>
        </div>
      </div>
    );
  };
  export default TopBar;