import { useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import AddComment from './components/AddComment/AddComment';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Footer from './components/Footer/Footer';
import HeaderSection from './components/HeaderSection/HeaderSection';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import HomePage from './pages/HomePage/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

function App() {
	const commentsRef = useRef<HTMLHeadingElement>(null);

	return (
		<main className={classes.app}>
			<HeaderSection ref={commentsRef} />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/experience' element={<ExperiencePage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<CommentsSection ref={commentsRef} />
			<AddComment />
			<Footer />
		</main>
	);
}

export default App;
