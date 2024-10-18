import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from './auth/signup'
import Login from './auth/login'
import ForgotPassword from './auth/forgot-password'
import ResetPassword from './auth/reset-password'
import VerifyEmail from './auth/verify-email'
import MainLayout from './layout/main-layout'
import HeroSection from './components/hero-section'
import Profile from './components/profile'
import RestaurantDetail from './components/restaurant-detail'
import Cart from './components/cart'
import Restaurant from './admin/restaurant'
import AddMenu from './admin/add-menu'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HeroSection />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/restaurant/:id',
				element: <RestaurantDetail />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			// admin services start from here
			{
				path: '/admin/restaurant',
				element: <Restaurant />,
			},
			{
				path: '/admin/menu',
				element: <AddMenu />,
			},
		],
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
	},
	{
		path: '/reset-password',
		element: <ResetPassword />,
	},
	{
		path: '/verify-email',
		element: <VerifyEmail />,
	},
])

export default function App() {
	return (
		<main>
			<RouterProvider router={appRouter}></RouterProvider>
		</main>
	)
}
