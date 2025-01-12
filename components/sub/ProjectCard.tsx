import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description} : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-2xl border border-[#ffffff]'>
        <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />

        <div className='relative p-4'>
            <h1 className='text-2xl font-semibold text-grey-800'>{title}</h1>
            <p className='mt-2 text-grey-800'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard