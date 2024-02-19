import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Row, Space, Typography } from 'antd';

import {
    Button,
    ErrorMessage,
    Input,
    Layout,
    PasswordInput,
} from '../../components';
import { Path } from '../../enums/enums';
import { UserData, useSignInMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';

const SignIn = () => {
    const [error, setError] = useState('');
    const [signInUser, signInUserResult] = useSignInMutation();

    const onFinish = async (values: UserData) => {
        try {
            await signInUser(values).unwrap();
        } catch (error) {
            const isError = isErrorWithMessage(error);
            if (isError) {
                setError(error.data.message);
            } else {
                setError('Unknown error');
            }
        }
    };

    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Sign In" style={{ width: '30rem' }}>
                    <Form onFinish={onFinish} name="login">
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
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export { SignIn };
