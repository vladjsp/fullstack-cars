import { Button as AntButton } from 'antd';

type ButtonProps = {
    type?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
    icon?: React.ReactNode;
    shape?: 'default' | 'circle' | 'round';
    size?: 'small' | 'middle' | 'large' | undefined;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    htmlType?: 'button' | 'submit' | 'reset';
    danger?: boolean;
    ghost?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
};

export const Button = ({
    type = 'default',
    icon,
    shape,
    size,
    className,
    disabled = false,
    children,
    htmlType = 'button',
    danger,
    loading,
    ghost,
    onClick,
}: ButtonProps) => {
    return (
        <AntButton
            type={type}
            size={size}
            shape={shape}
            className={className}
            icon={icon}
            disabled={disabled}
            htmlType={htmlType}
            danger={danger}
            loading={loading}
            ghost={ghost}
            onClick={onClick}
        >
            {children}
        </AntButton>
    );
};
