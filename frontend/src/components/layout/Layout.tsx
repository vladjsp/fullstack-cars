import { Layout as AntLayout } from 'antd';
import styles from './layout.module.css';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <AntLayout.Content style={{ height: '100%' }}>
                {children}
            </AntLayout.Content>
        </div>
    );
};

export { Layout };
