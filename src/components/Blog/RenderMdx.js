"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Banner_720 from '@/banners/banner_720'
import Script from 'next/script'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Banner_480 from '@/banners/banner_480'

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {
    const MDXContent = useMDXComponent(blog?.body?.code)
    const router = useRouter()
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

      <Link href="https://affordspoonsgray.com/j75ssn35?key=55f12044e7cbff305d4db14598c53a3a" className="max-w-[320px]">
        <Image
          src="/car.jpg"
          width={320}
          height={320}
          alt="Image"
          className="object-contain w-full h-80"
        />
    </Link>
            <Script async="async" data-cfasync="false" src="//affordspoonsgray.com/7d56700dd5a27d1bff2cf4b9a2774565/invoke.js" />
        <div id="container-7d56700dd5a27d1bff2cf4b9a2774565"></div>
        <Script
            id="traffic-ad-bar"
            type="text/javascript"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
               tc_ad_client = "HouariDz95";
              tc_ad_width = "728";
              tc_ad_height = "90";
              tc_color_border = "#ffffff";
              tc_color_title = "#AC0101";
              tc_color_background = "#f8f8f8";
              tc_color_text = "#000000";
              tc_color_url = "#7c8e06";
              `
            }}
          />

          {/* Load the external script */}
          <Script
            src="//trafficadbar.com/bar/show.js"
            strategy="afterInteractive"
      />
    </div>
  )
}

export default RenderMdx

