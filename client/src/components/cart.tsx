import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

import CheckoutConfirmation from './checkout-confirmation'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from './ui/table'

export default function Cart() {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex flex-col max-w-7xl mx-auto my-10'>
			<div className='flex justify-end'>
				<Button variant='link'>Clear All</Button>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Items</TableHead>
						<TableHead>Title</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Quantity</TableHead>
						<TableHead>Total</TableHead>
						<TableHead className='text-right'>Remove</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>
							<Avatar>
								<AvatarImage src='' alt='' />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell> Biryani</TableCell>
						<TableCell> 75</TableCell>
						<TableCell>
							<div className='w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md'>
								<Button
									size={'icon'}
									variant={'outline'}
									className='rounded-full bg-gray-200'
								>
									<Minus />
								</Button>
								<Button
									size={'icon'}
									className='font-bold border-none'
									disabled
									variant={'outline'}
								>
									5
								</Button>
								<Button
									size={'icon'}
									className='rounded-full text-blue-500'
									variant={'outline'}
								>
									<Plus />
								</Button>
							</div>
						</TableCell>
						<TableCell>1000</TableCell>
						<TableCell className='text-right'>
							<Button size={'sm'} className='text-blue-500'>
								Remove
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow className='text-2xl font-bold'>
						<TableCell colSpan={5}>Total</TableCell>
						<TableCell className='text-right'>999.9</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<div className='flex justify-end my-5'>
				<Button className='text-blue-500' onClick={() => setOpen(true)}>
					Proceed To Checkout
				</Button>
			</div>
			<CheckoutConfirmation open={open} setOpen={setOpen} />
		</div>
	)
}
