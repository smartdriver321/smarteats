import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Login from './auth/login'

const appRouter = createBrowserRouter([
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
