import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface Props {
    icon?: React.ReactNode; // Optional icon prop
    category: string;
    openPosition: string;
}

export const JobCategoryCard = ({ 
    icon = <FaBriefcase />, // Default icon
    category, 
    openPosition 
}: Props) => {
    return (
        <div className="flex space-x-4 p-4 border cursor-default hover:text-blue-600 hover:shadow-md transition-all duration-500 border-gray-400 rounded-lg border-opacity-20 group">
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gray-200 transition-all duration-500 group-hover:bg-blue-600">
                {React.cloneElement(icon as React.ReactElement, {
                    className: 'text-2xl text-gray-600 group-hover:text-white transition-all duration-500 ',
                })}
            </div>
            {/* Content */}
            <div className='grid grid-cols-1 content-center'>
                <h3 className="text-base text-wrap font-semibold mb-[0.4rem]">{category}</h3>
                <p className="text-xs text-black font-normal text-opacity-50">
                    ({openPosition} open positions)
                </p>
            </div>
        </div>
    );
};
