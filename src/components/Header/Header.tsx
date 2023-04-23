import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import classes from './Header.module.scss';

const Header = () => {
	const clickBtnHandler = () => {
		console.log('Button Clicked');
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
};

export default Header;