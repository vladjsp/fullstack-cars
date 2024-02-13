import { Layout, Space } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { Button } from '../button/Button';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Path } from '../../enums/enums';

const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space className={styles.xxl}>
                <TeamOutlined className={styles.teamIcon} />
                <Link to={Path.home}>
                    <Button>Cars Catalogue</Button>
                </Link>
            </Space>
            <Space>
                <Link to={Path.signIn}>
                    <Button>Sign In</Button>
                </Link>
                <Link to={Path.signUp}>
                    <Button>Sign Up</Button>
                </Link>
            </Space>
        </Layout.Header>
    );
};

export { Header };
