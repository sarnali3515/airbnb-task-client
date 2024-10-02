import React from 'react';

const CategoryBox = ({ label, icon: Icon, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer flex flex-col items-center justify-center gap-2 p-4 border-b-4 
                        ${isSelected ? 'border-black' : 'border-transparent'} 
                        hover:border-gray-400 transition`}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
};

export default CategoryBox;
