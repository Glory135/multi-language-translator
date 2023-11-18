import { Outlet } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className='main'>
					<div className='gradient' />
				</div>
				<main className='app'>
					<div className='top-container'>
						<Topbar />
					</div>
					<Outlet />
					<Footer />
				</main>
			</QueryClientProvider>
		</>
	);
}

export default App;
