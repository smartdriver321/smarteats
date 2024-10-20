import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from 'lucide-react'

import { SignupInputState, userSignupSchema } from '@/schema/userSchema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useUserStore } from '@/store/useUserStore'

// typescript me type define krne ka 2 trika hota hai

export default function SignupPage() {
	const [input, setInput] = useState<SignupInputState>({
		fullname: '',
		email: '',
		password: '',
		contact: '',
	})
	const [errors, setErrors] = useState<Partial<SignupInputState>>({})

	const navigate = useNavigate()
	const { signup, loading } = useUserStore()

	const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInput({ ...input, [name]: value })
	}

	const loginSubmitHandler = async (e: FormEvent) => {
		e.preventDefault()
		// form validation check start
		const result = userSignupSchema.safeParse(input)

		if (!result.success) {
			const fieldErrors = result.error.formErrors.fieldErrors
			setErrors(fieldErrors as Partial<SignupInputState>)
			return
		}
		try {
			await signup(input)
			navigate('/verify-email')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<form
				className='md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4'
				onSubmit={loginSubmitHandler}
			>
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
						{errors && (
							<span className='text-xs text-red-500'>{errors.fullname}</span>
						)}
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
						{errors && (
							<span className='text-xs text-red-500'>{errors.email}</span>
						)}
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
						{errors && (
							<span className='text-xs text-red-500'>{errors.password}</span>
						)}
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
						{errors && (
							<span className='text-xs text-red-500'>{errors.contact}</span>
						)}
					</div>
				</div>
				<div className='mb-10'>
					{loading ? (
						<Button disabled className='w-full text-blue-500'>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
						</Button>
					) : (
						<Button type='submit' className='w-full text-blue-500'>
							SignUp
						</Button>
					)}
				</div>
				<Separator />
				<p className='mt-2'>
					Already have an account?{' '}
					<Link to='/login' className='text-blue-500'>
						LogIn
					</Link>
				</p>
			</form>
		</div>
	)
}
