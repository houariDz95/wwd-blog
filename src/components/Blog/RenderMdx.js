"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Banner_720 from '@/banners/banner_720'
import Script from 'next/script'
import Banner_480 from '@/banners/banner_480'
import Banner_350 from '@/banners/banner_350'
import Banner_160 from '@/banners/banner_160'

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
        <div className='mb-10 overflow-hidden'>
          <Banner_480 />
        </div>
        <MDXContent components={mdxComponents}/>
        <div>
          <Script async="async" data-cfasync="false" src="//pl21991331.profitablegatecpm.com/7d56700dd5a27d1bff2cf4b9a2774565/invoke.js" />
          <div id="container-7d56700dd5a27d1bff2cf4b9a2774565"></div>
        </div> 
    </div>
  )
}

export default RenderMdx