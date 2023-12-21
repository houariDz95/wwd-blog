"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Banner_350 from "@/banners/banner_350";
import Banner_720 from "@/banners/banner_720";
import { useState, useEffect } from 'react';

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {
    const [mobile, setMobile] = useState(false)
    
    useEffect(() => {
      if(window.innerWidth < 768){
        setMobile(true)
      }else{
        setMobile(false)
      }
    }, [])

    const MDXContent = useMDXComponent(blog.body.code)
    console.log(blog.body.code)
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
        {mobile ? <Banner_350 /> : <Banner_720 />}
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx