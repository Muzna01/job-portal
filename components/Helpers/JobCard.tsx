import { Job } from '@/data'
import Image from 'next/image'
import React from 'react'
import { BiMoney } from 'react-icons/bi'
import { FaMapLocation, FaRegBookmark } from 'react-icons/fa6'
import { SlBriefcase } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

interface Props {
  job: Job
}

export const JobCard = ({ job }: Props) => {
  return (
    <div className="relative group hover:shadow-md transition-all duration-500 border-gray-400 rounded-lg border border-opacity-20 p-1 md:p-6">
      <div className="flex items-start space-x-6">
        {/* Image */}
        <div>
          <Image src={job.image} alt={job.title} width={50} height={50} className="object-cover" />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-base font-semibold mb-2">
            {job.title}
          </h1>
          <div className="flex items-center md:space-x-10 space-x-4">
            {/* Category */}
            <div className="flex items-center space-x-2">
              <SlBriefcase className='w-4 h-4 text-gray-950' />
              <p className='text-xs text-black font-medium opacity-60'>{job?.category}</p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-1">
              <IoLocationOutline className='w-4 h-4 text-gray-950' />
              <p className='text-xs text-black font-medium opacity-60'>{job?.location}</p>
            </div>

            {/* Salary */}
            <div className="flex items-center space-x-2">
              <BiMoney className='w-4 h-4 text-gray-950' />
              <p className='text-xs text-black font-medium opacity-60'>{job?.salary} / {job?.salaryType}</p>
            </div>
          </div>

          {/* Tags */}
          <div className='flex item-center space-x-2 sm:space-x-4 mt-[1rem]'>
            <div className='text-[10px] sm:text-xs text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-medium capitalize bg-blue-400 text-blue-600'>
              {job?.jobtype}
            </div>
            <div className='text-[10px] sm:text-xs text-opacity-80 px-2 sm:px-6 py-1 rounded-full bg-opacity-30 font-medium capitalize text-[#F9AB00] bg-[#f9e400]'>
              Urgent
            </div>
          </div>
        </div>

        {/* Bookmark Icon */}
        <div className='absolute z-40 right-6 w-8 h-8 flex items-center justify-center transition-all duration-500 rounded-full group-hover:bg-gray-200'>
          <FaRegBookmark className='text-gray-400 ' />
        </div>
      </div>
    </div>
  )
}
