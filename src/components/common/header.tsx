interface HeaderProps {
	title?: string;
	subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
	title = 'Get a project quote',
	subtitle = 'Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.',
}) => {
	return (
		<header className='text-center mb-8'>
			<h1 className='text-[34px] font-bold leading-[45px] text-[#170f49] mb-2'>{title}</h1>
			<p className='text-[18px] font-normal leading-[30px] text-[#6e6b8f] max-w-[566px] mx-auto'>{subtitle}</p>
		</header>
	);
};

export default Header;
