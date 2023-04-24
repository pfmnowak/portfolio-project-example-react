import { Ref, forwardRef } from 'react';
import Header from '../Header/Header';
import classes from './HeaderSection.module.scss';

const HeaderSection = forwardRef(function HeaderSection(_props, ref: Ref<HTMLHeadingElement>) {
	return (
		<div className={classes['header-section']}>
			<Header ref={ref} />
			<div className={classes.content}>
				<div className={classes['header-text']}>
					<h1 className={`${classes['heading-primary']} ${classes['heading-primary--sub']}`}>
						Hello!
					</h1>
					<h1 className={`${classes['heading-primary']} ${classes['heading-primary--main']}`}>
						I am <span className={classes['heading-primary--color']}>HRS</span> Pathan Creative
						UI/UX Designer
					</h1>
					<ol className={classes['skill-list']}>
						<li>UI/UX Design</li>
						<li>Product Design</li>
						<li>Web Design</li>
						<li>Front-end Design</li>
					</ol>
				</div>
				<div className={classes['header-image']}>
					<img src={require('../../img/model.png')} className={classes['model']} alt='model' />
				</div>
			</div>
		</div>
	);
});

export default HeaderSection;
