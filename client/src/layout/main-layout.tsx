import { Outlet } from 'react-router-dom'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function MainLayout() {
	return (
		<div className='flex flex-col min-h-screen m-2 md:m-0'>
			{/* Navbar  */}
			<header>
				<Navbar />
			</header>
			{/* Main content  */}
			<div className='flex-1'>
				<Outlet />
			</div>

			{/* Footer  */}
			<footer>
				<Footer />
			</footer>
		</div>
	)
}
