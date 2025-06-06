import { useState } from 'react';

interface InputFieldProps {
	label: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	type?: 'text' | 'email' | 'tel';
	icon?: string;
	required?: boolean;
	error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange, type = 'text', icon, required = false, error }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className='mb-6'>
			<label className='block text-[18px] font-medium leading-[24px] text-[#170f49] mb-3'>
				{label}
				{required && <span className='text-red-500 ml-1'>*</span>}
			</label>
			<div className='relative'>
				<input
					type={type}
					value={value}
					onChange={handleInputChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder={placeholder}
					className={`w-full h-[66px] px-5 pr-12 bg-white border-[#eff0f6] rounded-[33px] text-[18px] font-normal leading-[24px] text-black placeholder-[rgb(110,107,143)] shadow-[0px_2px_6px_#12114111] focus:outline-none border-2 focus:border-[var(--quote-accent)] transition-all duration-200 ${
						error ? 'border-red-500' : ''
					}`}
					required={required}
				/>
				{icon && <img src={icon} alt='' className='absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6' />}
			</div>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	);
};

export default InputField;
