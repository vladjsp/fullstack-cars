import { Input as AntInput, Form } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type InputProps = {
    name: string;
    placeholder: string;
    type?: string;
    size?: 'large' | 'small' | 'middle' | undefined;
    disabled?: boolean;
    required?: boolean | undefined;
};

export const Input = ({
    name,
    placeholder = 'Type here...',
    type = 'text',
    size = 'large',
    disabled = false,
    required = true,
}: InputProps) => {
    return (
        <Form.Item
            name={name}
            shouldUpdate={true}
            rules={[
                {
                    required: required,
                    message: 'Please input your E-mail!',
                },
            ]}
        >
            {type === 'password' ? (
                <AntInput.Password
                    placeholder={placeholder}
                    disabled={disabled}
                    size={size}
                />
            ) : (
                <AntInput
                    type={type}
                    size={size}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            )}
        </Form.Item>
    );
};

type PasswordInputProps = InputProps & {
    dependencies?: NamePath[];
};

export const PasswordInput = ({
    name,
    placeholder = 'Enter your password',
    dependencies,
}: PasswordInputProps) => {
    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback={true}
            rules={[
                { required: true, message: 'Please, enter your password.' },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        // if (!value || getFieldValue('password') === value) {
                        //     return Promise.resolve();
                        // }

                        if (name === 'confirmPassword') {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    'The new password that you entered do not match!',
                                ),
                            );
                        } else {
                            if (value.length < 6) {
                                return Promise.reject(
                                    new Error(
                                        'Password should be at least 6 char.',
                                    ),
                                );
                            }
                        }
                    },
                }),
            ]}
        >
            <AntInput.Password placeholder={placeholder} size="large" />
        </Form.Item>
    );
};
