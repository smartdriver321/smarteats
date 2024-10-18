import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { LockKeyhole, Mail, PhoneOutgoing, User } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// typescript me type define krne ka 2 trika hota hai

export default function SignupPage() {
	const [input, setInput] = useState({
		fullname: '',
		email: '',
		password: '',
		contact: '',
	})
	const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInput({ ...input, [name]: value })
	}

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<form className='md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4'>
				<div className='mb-4'>
					<h1 className='font-bold text-2xl'>SmartEats</h1>
				</div>
				<div className='mb-4'>
					<div className='relative'>
						<Input
							type='text'
							placeholder='Full Name'
							name='fullname'
							value={input.fullname}
							className='pl-10 focus-visible:ring-1'
							onChange={changeEventHandler}
						/>
						<User className='absolute inset-y-2 left-2 text-gray-500 pointer-events-none' />
					</div>
				</div>
				<div className='mb-4'>
					<div className='relative'>
						<Input
							type='email'
							placeholder='Email'
							name='email'
							value={input.email}
							className='pl-10 focus-visible:ring-1'
							onChange={changeEventHandler}
						/>
						<Mail className='absolute inset-y-2 left-2 text-gray-500 pointer-events-none' />
					</div>
				</div>
				<div className='mb-4'>
					<div className='relative'>
						<Input
							type='password'
							placeholder='Password'
							name='password'
							value={input.password}
							className='pl-10 focus-visible:ring-1'
							onChange={changeEventHandler}
						/>
						<LockKeyhole className='absolute inset-y-2 left-2 text-gray-500 pointer-events-none' />
					</div>
				</div>
				<div className='mb-4'>
					<div className='relative'>
						<Input
							type='text'
							placeholder='Contact'
							name='contact'
							value={input.contact}
							className='pl-10 focus-visible:ring-1'
							onChange={changeEventHandler}
						/>
						<PhoneOutgoing className='absolute inset-y-2 left-2 text-gray-500 pointer-events-none' />
					</div>
				</div>
				<div className='mb-10'>
					<Button type='submit' className='w-full text-blue-500'>
						Signup
					</Button>
				</div>
				<Separator />
				<p className='mt-2'>
					Already have an account?{' '}
					<Link to='/login' className='text-blue-500'>
						Login
					</Link>
				</p>
			</form>
		</div>
	)
}
