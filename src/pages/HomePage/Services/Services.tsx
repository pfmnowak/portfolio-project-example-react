import DataContainer from '../../../components/DataContainer/DataContainer';
import ServiceItem from './ServiceItem/ServiceItem';
import Section from '../../../components/ui/Section/Section';
import { API_URL } from '../../../constants';
import { Service as ServiceType } from '../../../types/types';
import classes from './Services.module.scss';

const getServiceIcon = (itemName: string) => {
	let icon = '';
	switch (itemName) {
		case 'fully responsive':
			icon = 'device';
			break;
		case '24/7 support':
			icon = 'headphones';
			break;
		case 'ui/ux designer':
			icon = 'heart';
			break;
		default:
			icon = 'heart';
			break;
	}
	return icon;
};

const Services = () => {
	const renderServices = (services: any[] | undefined) => {
		return (
			<ul className={classes.services}>
				{services &&
					services.map((item: ServiceType) => (
						<ServiceItem
							key={item.id}
							text={item.description}
							title={item.name}
							icon={getServiceIcon(item.name)}
						/>
					))}
			</ul>
		);
	};

	return (
		<div className={classes.home__services}>
			<Section
				title='What we do'
				subtitle='Better Services For You'
				description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'
			>
				<DataContainer url={`${API_URL}/services`} renderData={renderServices} />
			</Section>
		</div>
	);
};

export default Services;
