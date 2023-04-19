import ServiceItem from '../../components/ServiceItem/ServiceItem';
import classes from './HomePage.module.scss';

const fakeData = [
	{
		name: 'fully responsive',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
		id: '1',
	},
	{
		name: 'ui/ux designer',
		description:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		id: '2',
	},
	{
		name: '24/7 support',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
		id: '3',
	},
];

const getIcon = (itemName: string) => {
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

const HomePage = () => {
	return (
		<div className={classes.home}>
			<ul className={classes.services}>
				{fakeData.map(item => (
					<ServiceItem
						key={item.id}
						text={item.description}
						title={item.name}
						icon={getIcon(item.name)}
					/>
				))}
			</ul>
		</div>
	);
};

export default HomePage;
