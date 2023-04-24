import { useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import HeaderSection from './components/HeaderSection/HeaderSection';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

function App() {
	const commentsRef = useRef<HTMLHeadingElement>(null);

	return (
		<div className={classes.app}>
			<HeaderSection ref={commentsRef} />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/experience' element={<ExperiencePage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Comments ref={commentsRef} />
			<Footer />
		</div>
	);
}

export default App;
