import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from './auth/signup'
import Login from './auth/login'
import ForgotPassword from './auth/forgot-password'

const appRouter = createBrowserRouter([
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
])

export default function App() {
	return (
		<main>
			<RouterProvider router={appRouter}></RouterProvider>
		</main>
	)
}
