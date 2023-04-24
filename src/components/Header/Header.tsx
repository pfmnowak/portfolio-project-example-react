import { Ref, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button/Button';
import classes from './Header.module.scss';

const Header = forwardRef(function Header(_props, ref: Ref<HTMLHeadingElement>) {
	const clickBtnHandler = () => {
		ref && 'current' in ref && ref.current && ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className={classes.header}>
			<img src={require('../../img/logo.png')} className={classes['header__logo']} alt='Logo' />
			<nav className={classes['header__menu']}>
				<NavLink
					className={({ isActive }) =>
						`${classes['header__link']} ${isActive ? classes['header__link--active'] : ''}`
					}
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${classes['header__link']} ${isActive ? classes['header__link--active'] : ''}`
					}
					to='/services'
				>
					Services
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${classes['header__link']} ${isActive ? classes['header__link--active'] : ''}`
					}
					to='/experience'
				>
					Experience
				</NavLink>
			</nav>
			<Button onClick={clickBtnHandler}>Comments</Button>
		</header>
	);
});

export default Header;
