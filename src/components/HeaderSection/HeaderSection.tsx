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
			<img
				src={require('../../img/Shape 3.png')}
				className={`${classes['shape']} ${classes['shape--1']} ${classes['shape--1--bottom']}`}
			/>
			<img
				src={require('../../img/Shape 3.png')}
				className={`${classes['shape']} ${classes['shape--1']} ${classes['shape--1--top']}`}
			/>
			<img
				src={require('../../img/Shape 2.png')}
				className={`${classes['shape']} ${classes['shape--2']}`}
			/>
			<img
				src={require('../../img/Polygon 3 copy.png')}
				className={`${classes['shape']} ${classes['shape--3']}`}
			/>
			<img
				src={require('../../img/Polygon 3.png')}
				className={`${classes['shape']} ${classes['shape--4']}`}
			/>
			<img
				src={require('../../img/Shape 2 copy.png')}
				className={`${classes['shape']} ${classes['shape--5']}`}
			/>
			<img
				src={require('../../img/Polygon 1.png')}
				className={`${classes['shape']} ${classes['shape--6']}`}
			/>
			<img
				src={require('../../img/Polygon 1 copy.png')}
				className={`${classes['shape']} ${classes['shape--7']}`}
			/>
		</div>
	);
});

export default HeaderSection;
