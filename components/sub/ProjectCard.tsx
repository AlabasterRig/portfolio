import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-2xl border border-[#ffffff] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'>
        <Image 
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className='w-full object-cover'  // Used object-cover for consistent scaling
        />

        <div className='relative p-4'>
            <h1 className='text-xl sm:text-2xl font-semibold text-[#1E2022]'>{title}</h1>
            <p className='mt-2 text-[#1E2022] text-sm sm:text-base'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard;
