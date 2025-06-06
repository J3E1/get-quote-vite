import Button from '@/components/ui/button';
import { UserInputContext } from '@/context/user-input-context';
import { useContext } from 'react';

const SubmitQuotePage = () => {
	const { userInput } = useContext(UserInputContext);

	const handleSubmit = () => {
		console.log('Submitting user input:', userInput);
	};

	return (
		<div className='mb-16'>
			<img src='/images/Group 37301.svg' alt='Submit icon' className='w-40 h-40 object-contain mx-auto' />
			<div className='text-center my-4'>
				<h2 className='text-[24px] font-bold leading-[32px] text-[#170f49] mb-4'>Our services</h2>
				<p className='text-[18px] font-normal leading-[24px] text-[#6e6b8f] mb-8 max-w-lg mx-auto'>
					Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 -
					48 hours.
				</p>
				<Button onClick={handleSubmit}>Submit</Button>
			</div>
		</div>
	);
};
export default SubmitQuotePage;
