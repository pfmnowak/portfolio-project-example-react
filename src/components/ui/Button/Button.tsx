import { ReactNode } from 'react';
import classes from './Button.module.scss';

type ButtonProps = {
	onClick: () => void;
	children?: ReactNode;
};

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
