import { ReactNode } from 'react';
import classes from './CustomContainer.module.scss';

type CustomContainerProps = {
	children?: ReactNode;
};

const CustomContainer = ({ children }: CustomContainerProps) => {
	return <div className={classes['custom-container']}>{children}</div>;
};

export default CustomContainer;
