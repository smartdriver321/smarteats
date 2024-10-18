import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from './auth/signup'
import Login from './auth/login'
import ForgotPassword from './auth/forgot-password'
import ResetPasswordPage from './auth/reset-password'
import VerifyEmail from './auth/verify-email'
import MainLayout from './layout/main-layout'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
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
		element: <ResetPasswordPage />,
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
