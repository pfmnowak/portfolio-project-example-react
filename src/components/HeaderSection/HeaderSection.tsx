import Header from '../Header/Header';
import classes from './HeaderSection.module.scss';

const HeaderSection = () => {
	return (
		<div className={classes['header-section']}>
			<Header />
		</div>
	);
};

export default HeaderSection;
