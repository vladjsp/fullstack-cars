import { Link } from 'react-router-dom';
import { Button, Input, Layout, PasswordInput } from '../../components';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Path } from '../../enums/enums';

const onFinish = (values: FormData) => {
    console.log('Success:', values);
};

const SignUp = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Sign Up" style={{ width: '30rem' }}>
                    <Form onFinish={onFinish} name="register">
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
                        <PasswordInput
                            name="confirmPassword"
                            placeholder="Repeat your password"
                        />
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>
                    <Space direction="vertical" size="large">
                        <Typography.Text>
                            Already have an account?{' '}
                            <Link to={Path.signIn}>Sign in</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export { SignUp };
