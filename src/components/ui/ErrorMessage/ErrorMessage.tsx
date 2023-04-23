import { ReactNode } from 'react';
import classes from './ErrorMessage.module.scss';

type ErrorMessageProps = {
	children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
	return <div className={classes.error}>{children}</div>;
};

export default ErrorMessage;
