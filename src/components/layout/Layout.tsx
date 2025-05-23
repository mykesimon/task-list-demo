import { Outlet } from 'react-router-dom';
import { Header } from '..';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='flex flex-col items-center px-4 mt-8 mb-8'>
				<Outlet />
			</main>
			<Toaster position='bottom-right' />
		</>
	);
};

export default Layout;
