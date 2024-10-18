import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from './auth/signup'
import Login from './auth/login'
import ForgotPassword from './auth/forgot-password'
import ResetPassword from './auth/reset-password'
import VerifyEmail from './auth/verify-email'
import MainLayout from './layout/main-layout'
import HeroSection from './components/hero-section'
import Profile from './components/profile'
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
