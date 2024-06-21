

'use client'
import { useEffect, useRef } from 'react'

export default function Banner_130() {
    const banner = useRef()
 
    const atOptions = {
		'key' : 'f0752772e833cecd55d786d67c03dab6',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//affordspoonsgray.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 w-fit flex justify-center items-center text-white text-center" ref={banner}></div>
}