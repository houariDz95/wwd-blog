'use client'
import { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect';
export default function Banner_720() {
    const banner = useRef()

    const atOptions = {
		'key' : !isMobile ? '89091488e6459fcdac5d419498f68ee0' : 'a2cae1a172fe887aa3f28a123a9e4e17',
		'format' : 'iframe',
		'height' : isMobile ? 50 : 90,
		'width' : isMobile ? 350 : 728,
		'params' : {}
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 w-fit flex justify-center items-center text-white text-center" ref={banner}></div>
}