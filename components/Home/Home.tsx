import React from 'react'
import { Hero, JobCategory } from '../../paths'
import FeatureJobs from './FeatureJobs'
import CustomerTestimonials from './CustomerTestimonials'

const Home = () => {
    return (
        <div>
            <Hero />
            <JobCategory />
            <FeatureJobs />
            <CustomerTestimonials/>

        </div>
    )
}

export default Home