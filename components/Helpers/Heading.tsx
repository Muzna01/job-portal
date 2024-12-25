import React from 'react'

interface Props {
    mainHeading: string
    subHeading: string
}
export const Heading = (props: Props) => {
    return (

        <div className="text-center p-3">
            <h1 className="text-black text-[28px] text-opacity-90 font-bold font-['Arial'] ">
                {props.mainHeading}
            </h1>
            <p className="mt-[1rem] text-[15px] text-gray-800 text-opacity-80 font-medium font-['Arial']">
                {props.subHeading}
            </p>
        </div>


    )
}

