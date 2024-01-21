import { NavLink } from 'react-router-dom';
import { pathsConstant } from '../../lib/data';

const Header = () => {
	const arrayOfLinks = Object.values(pathsConstant);

	return (
		<header className='w-full p-4 bg-gray-800 text-white '>
			<nav>
				<ul className='flex flex-row justify-center sm:justify-end gap-3 items-center'>
					{arrayOfLinks.map((link, index) => (
						<li key={index}>
							<NavLink
								className={({ isActive }) => (isActive ? 'underline' : '')}
								to={link.path}
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
