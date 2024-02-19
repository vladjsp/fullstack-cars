import { Alert } from 'antd';

type ErrorMessageProps = {
    message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    if (!message) {
        return null;
    }
    return <Alert message={message} type="error" />;
};

export default ErrorMessage;
