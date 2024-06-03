import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: siteMetadata.siteLogo,
        href: siteMetadata.siteLogo,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: siteMetadata.siteLogo,
        href: siteMetadata.siteLogo,
      }
    ]
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
  other: {
    "monetag" : "7f9b6c527f95819c68abced3d6574029",
    "ppck-ver": "bc1c404439495cebfcf295341e5f763e",
    "e032d971833419d42de1c79a09cd09e5954f45e4" : "e032d971833419d42de1c79a09cd09e5954f45e4" 
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
    <script async="async" data-cfasync="false" src="//thubanoa.com/1?z=7306424"></script>
       <Script 
        id="vignet"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,z,s){
                s.src='https://'+d+'/401/'+z;
                try{
                  (document.body || document.documentElement).appendChild(s);
                } catch(e) {}
              })('glizauvo.net', 7344616, document.createElement('script'));
            `,
          }}
        />  
      {/*<script async="async" data-cfasync="false" src="//thubanoa.com/1?z=7344634"></script>   */}
      </head> 
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}

        </Script>
        <Script 
        id="banner"
          dangerouslySetInnerHTML={{
            __html: `
            (function(vpftb){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = vpftb || {};
              s.src = "\/\/palecount.com\/b.X-VcsVdwGRlJ0lY\/WPdXiDYEWN5uufZHXxIp\/seMm_9vujZSU\/l\/k\/P\/TrUBzuNCjkgbyKOSD\/AXtqN\/TvMI2SO_DkIO4VMlQn";
              s.async = true;
              l.parentNode.insertBefore(s, l);
              })({})
            `,
          }}
        /> 
        {/* <Script 
        id="push"
          dangerouslySetInnerHTML={{
            __html: `
            (function(osn){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = osn || {};
              s.src = "\/\/palecount.com\/a.Wk5xwhY\/WVdSlBQV2Z9GkNZ\/TS9a6fbq2X5\/lmSjWqQm9CNGTVMd2GOBDpIP5bMbCG0S1-MAzXY\/4aMojlk-xp";
              s.async = true;
              l.parentNode.insertBefore(s, l);
              })({})
            `,
          }}
        />  */}
        <Script async="async" data-cfasync="false" src="//pl21991331.toprevenuegate.com/7d56700dd5a27d1bff2cf4b9a2774565/invoke.js" />
        <script type='text/javascript' src='//pl22341088.profitablegatecpm.com/2d/b3/dc/2db3dc1290e9032f99ff2952bb01f197.js'></script>
        <Header />
        {children}
        <Footer />
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}


