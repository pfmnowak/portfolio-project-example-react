import { ReactNode } from 'react';
import classes from './Button.module.scss';

type ButtonProps = {
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button' | undefined;
	children?: ReactNode;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
	return (
		<button className={classes.button} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
