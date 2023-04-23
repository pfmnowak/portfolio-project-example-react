import { ReactNode } from 'react';
import classes from './Section.module.scss';

type SectionProps = {
	title: string;
	subtitle: string;
	description?: string;
	children?: ReactNode;
};

const Section = ({ title, subtitle, description, children }: SectionProps) => {
	return (
		<section className={classes.section}>
			<h3 className={classes['section__title']}>{title}</h3>
			<h4 className={classes['section__subtitle']}>{subtitle}</h4>
			{description && <p className={classes['section__description']}>{description}</p>}
			<div className={classes['section__content']}>{children}</div>
		</section>
	);
};

export default Section;
