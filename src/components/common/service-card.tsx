import React from 'react';

interface ServiceCardProps {
  label: string;
  value: string;
  imgPath: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ label, value, imgPath, checked, onChange }) => {
  return (
    <label
      className={`flex items-center p-6 bg-white border-2 border-[#eff0f6] rounded-2xl shadow-[0px_5px_16px_#080f340f] transition-all cursor-pointer gap-4 ${checked ? 'border-2 border-[var(--quote-accent)] shadow-[0_4px_24px_0_rgba(74,58,255,0.08)]' : 'border border-[#eff0f6]'}`}
      style={{ boxShadow: checked ? '0 4px 24px 0 rgba(74,58,255,0.08)' : undefined }}
    >
      <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#dddaff]">
        <img src={imgPath} alt={label} className="w-10 h-10 object-contain" />
      </span>
      <span className="text-lg font-medium leading-[32px] text-[#170f49]">{label}</span>
      <input
        type="radio"
        name="service"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden"
      />
    </label>
  );
};

export default ServiceCard;
