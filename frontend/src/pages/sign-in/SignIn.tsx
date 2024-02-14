import { Link } from 'react-router-dom';
import { Button, Input, Layout, PasswordInput } from '../../components';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Path } from '../../enums/enums';

const onFinish = (values: FormData) => {
    console.log('Success:', values);
};

const SignIn = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Sign In" style={{ width: '30rem' }}>
                    <Form onFinish={onFinish}>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <PasswordInput
                            name="password"
                            placeholder="Enter your password"
                        />
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            No account? <Link to={Path.signUp}>Sign up</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export { SignIn };
