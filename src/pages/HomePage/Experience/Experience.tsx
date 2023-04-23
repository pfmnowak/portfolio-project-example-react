import DataContainer from '../../../components/DataContainer/DataContainer';
import Section from '../../../components/ui/Section/Section';
import { API_URL } from '../../../constants';
import { Qualification as QualificationType } from '../../../types/types';
import classes from './Experience.module.scss';
import Qualification from './Qualification/Qualification';

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

const Experience = () => {
	const renderQualifications = (qualifications: any[] | undefined) => {
		return (
			<ul className={classes.qualifications}>
				{qualifications &&
					qualifications.map((item: QualificationType) => (
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
		);
	};

	return (
		<div className={classes.experience}>
			<Section
				title='Qualification'
				subtitle='My Experience'
				description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has'
			>
				<DataContainer url={`${API_URL}/experience`} renderData={renderQualifications} />
			</Section>
		</div>
	);
};

export default Experience;
