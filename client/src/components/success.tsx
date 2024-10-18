import { Link } from 'react-router-dom'
import { DollarSign } from 'lucide-react'
import Image from '../assets/hero_pizza.png'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function Success() {
	const orders = [1, 2]

	if (orders.length === 0)
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<h1 className='font-bold text-2xl text-gray-700 dark:text-gray-300'>
					Order not found!
				</h1>
			</div>
		)

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4'>
			<div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full'>
				<div className='text-center mb-6'>
					<h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
						Order Status:{' '}
						<span className='text-[#FF5A5A]'>{'confirm'.toUpperCase()}</span>
					</h1>
				</div>
				<div className='mb-6'>
					<h2 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4'>
						Order Summary
					</h2>
					{/* Your ordered item display here  */}
					<div className='mb-4'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center'>
								<img
									src={Image}
									alt=''
									className='w-14 h-14 rounded-md object-cover'
								/>
								<h3 className='ml-4 text-gray-800 dark:text-gray-200 font-medium'>
									Pizza
								</h3>
							</div>
							<div className='text-right'>
								<div className='text-gray-800 dark:text-gray-200 flex items-center'>
									<DollarSign />
									<span className='text-lg font-medium'>999</span>
								</div>
							</div>
						</div>
						<Separator className='my-4' />
					</div>
				</div>
			</div>
			<Link to='/cart'>
				<Button className='text-blue-500 w-full py-3 rounded-md shadow-lg'>
					Continue Shopping
				</Button>
			</Link>
		</div>
	)
}
