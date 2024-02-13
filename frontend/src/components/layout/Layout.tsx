import { Layout as AntLayout } from 'antd';
import styles from './layout.module.css';
import { Header } from '../header/Header';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <AntLayout.Content style={{ height: '100%' }}>
                {children}
            </AntLayout.Content>
        </div>
    );
};

export { Layout };
