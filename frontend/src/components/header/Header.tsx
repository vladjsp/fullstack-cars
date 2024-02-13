import { Layout, Space } from 'antd';
import { CarOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';
import { Button } from '../button/Button';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Path } from '../../enums/enums';

const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space className={styles.xxl}>
                <CarOutlined className={styles.teamIcon} />
                <Link to={Path.home}>
                    <Button type="text" className={styles.logoButton}>
                        Cars Catalogue
                    </Button>
                </Link>
            </Space>
            <Space>
                <Link to={Path.signIn}>
                    <Button type="text" icon={<LoginOutlined />}>
                        Sign In
                    </Button>
                </Link>
                <Link to={Path.signUp}>
                    <Button type="text" icon={<UserOutlined />}>
                        Sign Up
                    </Button>
                </Link>
            </Space>
        </Layout.Header>
    );
};

export { Header };
