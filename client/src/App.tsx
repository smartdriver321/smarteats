import { useEffect } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { useThemeStore } from './store/useThemeStore'
import { useUserStore } from './store/useUserStore'
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
import Success from './components/success'
import Restaurant from './admin/restaurant'
import AddMenu from './admin/add-menu'
import Orders from './admin/orders'
import Loading from './components/loading'

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, user } = useUserStore()

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />
	}

	if (!user?.isVerified) {
		return <Navigate to='/verify-email' replace />
	}
	return children
}

const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, user } = useUserStore()

	if (isAuthenticated && user?.isVerified) {
		return <Navigate to='/' replace />
	}

	return children
}

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
	const { user, isAuthenticated } = useUserStore()

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />
	}

	if (!user?.admin) {
		return <Navigate to='/' replace />
	}

	return children
}

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoutes>
				<MainLayout />
			</ProtectedRoutes>
		),
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
			{
				path: '/order/status',
				element: <Success />,
			},
			// admin services start from here
			{
				path: '/admin/restaurant',
				element: (
					<AdminRoute>
						<Restaurant />
					</AdminRoute>
				),
			},
			{
				path: '/admin/menu',
				element: (
					<AdminRoute>
						<AddMenu />
					</AdminRoute>
				),
			},
			{
				path: '/admin/orders',
				element: (
					<AdminRoute>
						<Orders />
					</AdminRoute>
				),
			},
		],
	},
	{
		path: '/signup',
		element: (
			<AuthenticatedUser>
				<Signup />
			</AuthenticatedUser>
		),
	},
	{
		path: '/login',
		element: (
			<AuthenticatedUser>
				<Login />
			</AuthenticatedUser>
		),
	},
	{
		path: '/forgot-password',
		element: (
			<AuthenticatedUser>
				<ForgotPassword />
			</AuthenticatedUser>
		),
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
	const initializeTheme = useThemeStore((state: any) => state.initializeTheme)
	const { checkAuthentication, isCheckingAuth } = useUserStore()

	// checking auth every time when page is loaded
	useEffect(() => {
		checkAuthentication()
		initializeTheme()
	}, [checkAuthentication])

	if (isCheckingAuth) return <Loading />

	return (
		<main>
			<RouterProvider router={appRouter}></RouterProvider>
		</main>
	)
}
