import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import Footer from './components/Footer/Footer';
import HeaderSection from './components/HeaderSection/HeaderSection';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<div className={classes.app}>
			<HeaderSection />
			<Routes>
				<Route path='/' element={<HomePage />} />
				{/* <Route path='/experience' element={<ExperiencePage />} /> */}
				{/* <Route path='/services' element={<ServicesPage />} /> */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
