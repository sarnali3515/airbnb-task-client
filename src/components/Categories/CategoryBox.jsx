import React from 'react';

const CategoryBox = ({ label, icon: Icon, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer flex flex-col items-center justify-center gap-2 m-3 border-b-2 
                        ${isSelected ? 'border-black' : 'border-transparent'} 
                        hover:border-gray-400 transition`}
        >
            <Icon size={24} />
            <div className="font-medium text-sm">{label}</div>
        </div>
    );
};

export default CategoryBox;
