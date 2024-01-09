"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Banner_720 from '@/banners/banner_720'

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    '>  
        <div className='mb-10'>
          <Banner_720 />
        </div>
        <MDXContent components={mdxComponents}/>
        <a 
        target="_blank" 
        href="https://shareasale.com/r.cfm?b=2467813&amp;u=4040299&amp;m=35635&amp;urllink=&amp;afftrack=">
          <img 
          src="https://static.shareasale.com/image/35635/November-2023-OfficialHCGdietplan_00.png" 
          border="0" alt="Black Friday Special Sale" />
        </a>
    </div>
  )
}

export default RenderMdx