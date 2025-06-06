import type { UserInput } from '@/@types';
import InputField from '@/components/ui/input';
import { UserInputContext } from '@/context/user-input-context';
import { useContext } from 'react';

const ContactDetailsPage: React.FC = () => {
	const { userInput, editUserInput, errors, setErrors } = useContext(UserInputContext);

	const handleInputChange = (field: keyof UserInput, value: string) => {
		editUserInput(field, value);

		// Clear error when user starts typing
		if (errors[field]) {
			// @ts-ignore
			setErrors(prev => ({
				...prev,
				[field]: undefined,
			}));
		}
	};

	return (
		<div>
			<h2 className='text-[24px] font-bold leading-[32px] text-[#170f49] mb-4'>Contact details</h2>
			<p className='text-[18px] font-normal leading-[24px] text-[#6e6b8f] mb-8'>Lorem ipsum dolor sit amet consectetur adipisc.</p>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<InputField
					label='Name'
					placeholder='John Carter'
					value={userInput.name}
					onChange={value => handleInputChange('name', value)}
					icon='/images/img_group_41.svg'
					required
					error={errors.name}
				/>

				<InputField
					label='Email'
					placeholder='Email address'
					value={userInput.email}
					onChange={value => handleInputChange('email', value)}
					type='email'
					icon='/images/img_group.svg'
					error={errors.email}
				/>

				<InputField
					label='Phone Number'
					placeholder='(123) 456 - 7890'
					value={userInput.phone}
					onChange={value => handleInputChange('phone', value)}
					type='tel'
					icon='/images/img_group_blue_gray_300.svg'
					error={errors.phone}
				/>

				<InputField
					label='Company'
					placeholder='Company name'
					value={userInput.company}
					onChange={value => handleInputChange('company', value)}
					icon='/images/img_group_3984.svg'
					required
					error={errors.company}
				/>
			</div>
		</div>
	);
};

export default ContactDetailsPage;
