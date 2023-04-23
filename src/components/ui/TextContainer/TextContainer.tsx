import { ReactNode } from 'react';
import classes from './TextContainer.module.scss';

type TextContainerProps = {
	children?: ReactNode;
};

const TextContainer = ({ children }: TextContainerProps) => {
	return <div className={classes['text-container']}>{children}</div>;
};

export default TextContainer;
