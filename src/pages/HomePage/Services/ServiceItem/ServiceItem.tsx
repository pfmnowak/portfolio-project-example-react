import classes from './ServiceItem.module.scss';

type ServiceItemProps = {
	title: string;
	text: string;
	icon: string;
};

const ServiceItem = ({ title, text, icon }: ServiceItemProps) => {
	return (
		<li className={classes['service-item']}>
			<div className={classes['service-item__circle']}>
				<img
					src={require(`../../../../img/${icon}.png`)}
					className={classes['service-item__icon']}
					alt={`${icon} Icon`}
				/>
			</div>
			<h5 className={classes['service-item__title']}>{title}</h5>
			<p className={classes['service-item__text']}>{text}</p>
		</li>
	);
};

export default ServiceItem;
