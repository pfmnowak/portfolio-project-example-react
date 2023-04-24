import { formatDateMonthYear } from '../../../../helpers/formatDate';
import classes from './Qualification.module.scss';

type QualificationProps = {
	company: string;
	description: string;
	title: string;
	from: string;
	to: string | null;
	icon: string;
};

const Qualification = ({ company, description, title, from, to, icon }: QualificationProps) => {
	return (
		<li className={classes['qualification']}>
			<div className={classes['qualification__header']}>
				<div className={classes['qualification__icon-box']}>
					<img
						src={require(`../../../../img/${icon}.png`)}
						className={classes['qualification__icon']}
						alt={`${icon} Icon`}
					/>
				</div>
				<div className={classes['qualification__info']}>
					<h5 className={classes['qualification__company']}>{company}</h5>
					<p className={classes['qualification__date']}>
						{formatDateMonthYear(from)} - {to ? formatDateMonthYear(to) : 'now'}
					</p>
				</div>
			</div>
			<p className={classes['qualification__title']}>{title}</p>
			<p className={classes['qualification__description']}>{description}</p>
		</li>
	);
};

export default Qualification;
