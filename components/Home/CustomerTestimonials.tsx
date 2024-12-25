import React from 'react'
import { Heading, JobCategoryCard } from '../../paths'
import { FaCode, FaChartBar, FaMoneyBill  } from 'react-icons/fa';
import { GrMoney } from "react-icons/gr";


const CustomerTestimonials = () => {
    return (
        <div className='pt-8 md:pt-20 pb-8 md:pb-12'>
            {/* Heading */}
            <Heading mainHeading="Testimonials From Our Customers" subHeading="Lorem ipsum dolor sit amet elit, sed do eiusmod tempor" />

            <div className="w-[100%] p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8 items-center">
                <JobCategoryCard icon={<GrMoney />} category='Finance' openPosition='23' />
                <JobCategoryCard icon={<FaMoneyBill />} category='Marketing' openPosition='13' />
                <JobCategoryCard icon={<GrMoney />} category='Sales' openPosition='53' />
                <JobCategoryCard icon={<GrMoney />} category='Development' openPosition='13' />
                <JobCategoryCard icon={<GrMoney />} category='HR' openPosition='10' />
                <JobCategoryCard icon={<GrMoney />} category='Teacher' openPosition='8' />
                <JobCategoryCard icon={<GrMoney />} category='Mechanic' openPosition='42' />
                <JobCategoryCard icon={<GrMoney />} category='Retailer' openPosition='25' />
                <JobCategoryCard icon={<GrMoney />} category='Business' openPosition='31' />
            </div>
        </div>
    )
}

export default CustomerTestimonials