import styles from './layout.module.css';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export { Layout };
