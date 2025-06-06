interface StepperProps {
	currentStep: number;
	totalSteps: number;
	className?: string;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, className = '' }) => {
	return (
		<div className={`flex items-center justify-between space-x-20 mb-8 ${className}`}>
			{Array.from({ length: totalSteps }, (_, index) => {
				const stepNumber = index + 1;
				const isActive = stepNumber === currentStep;
				const isCompleted = stepNumber < currentStep;

				return (
					<div
						key={stepNumber}
						className={`w-[34px] h-[34px] rounded-[17px] flex items-center justify-center text-[16px] font-medium transition-all duration-200 ${
							isActive ? 'bg-[#007aff] text-white' : isCompleted ? 'bg-[#007aff] text-white' : 'bg-[#eff0f6] text-[#6e6b8f]'
						}`}
					>
						{stepNumber}
					</div>
				);
			})}
		</div>
	);
};

export default Stepper;
