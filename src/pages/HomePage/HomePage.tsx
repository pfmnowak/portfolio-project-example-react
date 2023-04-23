import Qualification from '../../components/Qualification/Qualification';
import ServiceItem from '../../components/ServiceItem/ServiceItem';
import Section from '../../components/ui/Section/Section';
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

const fakeQualificationData = [
	{
		id: 1,
		company: 'Behancer',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		from: '2017-01-10',
		to: '2017-06-25',
	},
	{
		id: 2,
		company: 'Dribbble',
		description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
		from: '2017-07-11',
		to: '2017-12-07',
	},
	{
		id: 3,
		company: 'Themforest',
		description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
		from: '2018-01-12',
		to: '2018-12-26',
	},
	{
		id: 4,
		company: 'Behancer',
		description:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
		from: '2019-01-01',
		to: null,
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

const getComapnyIcon = (companyName: string) => {
	let icon = '';
	switch (companyName) {
		case 'Behancer':
			icon = 'Behancer';
			break;
		case 'Dribbble':
			icon = 'Dribbble';
			break;
		case 'Themforest':
			icon = 'Themforest';
			break;
		default:
			icon = 'Behancer';
			break;
	}
	return icon;
};

const getComapnyTitle = (id: number) => {
	let title = '';
	switch (id) {
		case 1:
			title = 'Print & Web Designer';
			break;
		case 2:
			title = 'UI/UX Designer & Developer';
			break;
		case 3:
			title = 'Web Designer & Developer';
			break;
		case 4:
			title = 'Web Designer & Developer';
			break;
		default:
			title = 'Web Designer & Developer';
			break;
	}
	return title;
};

const HomePage = () => {
	return (
		<div className={classes.home}>
			<div className={classes.home__services}>
				<Section
					title='What we do'
					subtitle='Better Services For You'
					description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'
				>
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
				</Section>
			</div>
			<div className={classes.home__qualification}>
				<Section
					title='Qualification'
					subtitle='My Experience'
					description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'
				>
					<ul className={classes.qualifications}>
						{fakeQualificationData.map(item => (
							<Qualification
								key={item.id}
								company={item.company}
								description={item.description}
								title={getComapnyTitle(item.id)}
								from={item.from}
								to={item.to}
								icon={getComapnyIcon(item.company)}
							/>
						))}
					</ul>
				</Section>
			</div>
		</div>
	);
};

export default HomePage;
