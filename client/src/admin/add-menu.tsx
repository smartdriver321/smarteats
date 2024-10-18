import React, { FormEvent, useState } from 'react'
import { Loader2, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { MenuFormSchema, menuSchema } from '@/schema/menuSchema'
import EditMenu from './edit-menu'

const menus = [
	{
		title: 'Biryani',
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
		price: 200,
		image:
			'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg',
	},
]

export default function AddMenu() {
	const [input, setInput] = useState<MenuFormSchema>({
		name: '',
		description: '',
		price: 0,
		image: undefined,
	})
	const [open, setOpen] = useState<boolean>(false)
	const [error, setError] = useState<Partial<MenuFormSchema>>({})
	const [editOpen, setEditOpen] = useState<boolean>(false)
	const [selectedMenu, setSelectedMenu] = useState<any>()

	const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type } = e.target
		setInput({ ...input, [name]: type === 'number' ? Number(value) : value })
	}

	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const result = menuSchema.safeParse(input)

		if (!result.success) {
			const fieldErrors = result.error.formErrors.fieldErrors
			setError(fieldErrors as Partial<MenuFormSchema>)
			return
		}

		try {
			const formData = new FormData()
			formData.append('name', input.name)
			formData.append('description', input.description)
			formData.append('price', input.price.toString())
			if (input.image) {
				formData.append('image', input.image)
			}
		} catch (error) {
			console.log(error)
		}
		console.log(input)
	}

	const loading = false

	return (
		<div className='max-w-6xl mx-auto my-10'>
			<div className='flex justify-between'>
				<h1 className='font-bold md:font-extrabold text-lg md:text-2xl'>
					Available Menus
				</h1>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger>
						<Button className='text-blue-500'>
							<Plus className='mr-2' />
							Add Menus
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add A New Menu</DialogTitle>
							<DialogDescription>
								Create a menu that will make your restaurant stand out.
							</DialogDescription>
						</DialogHeader>
						<form onSubmit={submitHandler} className='space-y-4'>
							<div>
								<Label>Name</Label>
								<Input
									type='text'
									name='name'
									value={input.name}
									onChange={changeEventHandler}
									placeholder='Enter menu name'
								/>
								{error && (
									<span className='text-xs font-medium text-red-600'>
										{error.name}
									</span>
								)}
							</div>
							<div>
								<Label>Description</Label>
								<Input
									type='text'
									name='description'
									value={input.description}
									onChange={changeEventHandler}
									placeholder='Enter menu description'
								/>
								{error && (
									<span className='text-xs font-medium text-red-600'>
										{error.description}
									</span>
								)}
							</div>
							<div>
								<Label>Price in (Dollar)</Label>
								<Input
									type='number'
									name='price'
									value={input.price}
									onChange={changeEventHandler}
									placeholder='Enter menu price'
								/>
								{error && (
									<span className='text-xs font-medium text-red-600'>
										{error.price}
									</span>
								)}
							</div>
							<div>
								<Label>Upload Menu Image</Label>
								<Input
									type='file'
									name='image'
									onChange={(e) =>
										setInput({
											...input,
											image: e.target.files?.[0] || undefined,
										})
									}
								/>
								{error && (
									<span className='text-xs font-medium text-red-600'>
										{error.image?.name}
									</span>
								)}
							</div>
							<DialogFooter className='mt-5'>
								{loading ? (
									<Button disabled className='text-blue-500'>
										<Loader2 className='mr-2 w-4 h-4 animate-spin' />
										Please wait
									</Button>
								) : (
									<Button className='text-blue-500'>Submit</Button>
								)}
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			</div>
			{menus.map((menu: any, idx: number) => (
				<div key={idx} className='mt-6 space-y-4'>
					<div className='flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border'>
						<img
							src={menu.image}
							alt=''
							className='md:h-24 md:w-24 h-16 w-full object-cover rounded-lg'
						/>
						<div className='flex-1'>
							<h1 className='text-lg font-semibold text-gray-800'>
								{menu.name}
							</h1>
							<p className='text-sm tex-gray-600 mt-1'>{menu.description}</p>
							<h2 className='text-md font-semibold mt-2'>
								Price: <span className='text-[#D19254]'>80</span>
							</h2>
						</div>
						<Button
							size={'sm'}
							className='text-blue-500 mt-2'
							onClick={() => {
								setSelectedMenu(menu)
								setEditOpen(true)
							}}
						>
							Edit
						</Button>
					</div>
				</div>
			))}
			<EditMenu
				selectedMenu={selectedMenu}
				editOpen={editOpen}
				setEditOpen={setEditOpen}
			/>
		</div>
	)
}
