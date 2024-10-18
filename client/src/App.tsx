import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './auth/login'
import Signup from './auth/signup'

const appRouter = createBrowserRouter([
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/login',
		element: <Login />,
	},
])

export default function App() {
	return (
		<main>
			<RouterProvider router={appRouter}></RouterProvider>
		</main>
	)
}
