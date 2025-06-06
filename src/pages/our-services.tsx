import React, { useContext, useState } from 'react';
import ServiceCard from '../components/common/service-card';
import { UserInputContext } from '@/context/user-input-context';

import { services } from '../config/services';

const OurServicesPage: React.FC = () => {
	const { editUserInput, userInput } = useContext(UserInputContext);

	return (
		<div className='mb-16'>
			<h2 className='text-[24px] font-bold leading-[32px] text-[#170f49] mb-4'>Our services</h2>
			<p className='text-[18px] font-normal leading-[24px] text-[#6e6b8f] mb-8'>Please select which service you are interested in.</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{services.map(service => (
					<ServiceCard
						key={service.value}
						label={service.label}
						value={service.value}
						imgPath={service.imgPath}
						checked={userInput.selectedService === service.value}
						onChange={value => editUserInput('selectedService', value)}
					/>
				))}
			</div>
		</div>
	);
};
export default OurServicesPage;
