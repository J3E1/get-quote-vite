interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'font-bold rounded-[30px] transition-all duration-200 cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-[#4a3aff] text-white hover:bg-[#3d2ecc] shadow-[0px_3px_12px_#4939ff2d]',
    outline: 'bg-transparent border-2 border-[var(--quote-accent)] text-[var(--quote-accent)] hover:bg-[var(--quote-accent)] hover:text-white shadow-[0px_3px_12px_#4939ff2d]'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-10 py-4 text-[18px] leading-[24px]',
    large: 'px-12 py-5 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;