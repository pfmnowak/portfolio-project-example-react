import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<p className={classes.footer__copyright}>
				Copyright &copy; 2019 <span className={classes.footer__author}>Robi-pixel</span> All Rights
				Reserved.
			</p>
		</footer>
	);
};

export default Footer;
