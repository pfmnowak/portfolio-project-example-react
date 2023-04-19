import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className='App'>
			<header className='App-header' />
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
