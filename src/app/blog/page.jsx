import Banner_350 from '@/banners/banner_350'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "How Google Discover is Becoming a Traffic Powerhouse for U.S. News Publishers",
    descreption: "How Google Discover is Becoming a Traffic Powerhouse for U.S. News Publishers"
}

const BlogPage = () => {
  return (
    <>
        <script src="https://alwingulla.com/88/tag.min.js" data-zone="103993" async data-cfasync="false"></script>
        <div style={{direction: "ltr"}} className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                How Google Discover is Becoming a Traffic Powerhouse for U.S. News Publishers
                </h1>
                <p className="text-gray-600 mb-4">
                <span className="font-semibold">By John Doe - Sept. 26, 2024</span>
                </p>

                <div className="relative w-full h-64 mb-6">
                <Image
                    src="/blog.jpg"
                    alt="Declining Social Traffic"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>

                <p className="text-lg text-gray-700 mb-4">
                In recent years, U.S. news publishers have been grappling with the decline in traffic from social media. But
                while traffic from social platforms like Facebook has dwindled, something new has been quietly taking its
                place — and it&#39;s coming from Google Discover.
                </p>

                    <div className='w-full flex items-center justify-center my-2'>
                        <Banner_350 />
                    </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Social Traffic is Down — But Discover is Rising</h2>

                <p className="text-lg text-gray-700 mb-4">
                If you&#39;re running a news site, you&#39;ve probably noticed that traffic from social media has been decreasing.
                According to data from Chartbeat, a social analytics platform, traffic from social networks to U.S. news sites
                has dropped significantly — from 6% of total traffic in January 2023 to just 4% today. That&#39;s a one-third
                decline in just over a year.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                However, it&#39;s not all bad news. While social referrals are falling, traffic from other sources, especially
                Google Discover, is growing fast. In fact, for some publishers, Discover is driving more visitors than
                traditional Google Search.
                </p>

                <div className="relative w-full h-64 mb-6">
                <Image
                    src="/blog1.jpg"
                    alt="Google Discover Success"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Google Discover?</h2>

                <p className="text-lg text-gray-700 mb-4">
                Google Discover is a relatively new tool that delivers personalized content recommendations via the Google app
                and Chrome&#39;s mobile app. If you&#39;ve ever opened a new tab on your phone and seen a collection of news articles
                and content suggestions — that&#39;s Google Discover at work.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                Unlike Google Search, Discover doesn&#39;t require users to actively search for information. Instead, it curates
                content that aligns with a user&#39;s interests based on their browsing behavior. And while it&#39;s still somewhat of
                a mystery how Discover selects which articles to show, publishers are starting to see it as an important
                referral source for traffic.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Hill&#39;s Success With Discover</h2>

                <p className="text-lg text-gray-700 mb-4">
                The Hill, a well-known U.S. political publication, has been particularly successful with Google Discover. In
                fact, it has now overtaken Google Search as The Hill&#39;s top referral source, according to Will Federman, the VP
                of audience and content strategy at The Hill.
                </p>

                <div className="relative w-full h-64 mb-6">
                <Image
                    src="/blog1.jpg"
                    alt="Traffic Trends"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cracking the Google Discover Code</h2>

                <p className="text-lg text-gray-700 mb-4">
                However, figuring out what works on Discover is still a bit of a guessing game. Google&#39;s own guidelines for
                success on Discover are vague, leaving publishers to experiment with strategies. For example, BBC Studios is
                testing publishing at different times of the day to determine when content is most likely to perform well on
                Discover.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                One approach that has worked for The Hill is localizing national stories — that is, taking a big news story and
                finding a local angle. According to Federman, this tactic has helped them capture more Discover traffic.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experimentation and Uncertainty</h2>

                <p className="text-lg text-gray-700 mb-4">
                While some publishers are seeing positive results, Discover remains an uncertain space. &#34;We can guess what
                might work on Discover, but we don&#39;t pitch stories specifically for it,&#34; said Anne Look Thiam, head of
                audience development at BBC Studios.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                Brad Streicher echoed this sentiment, adding that while some patterns are emerging, Discover is still
                unpredictable. &#34;There&#39;s a playbook that&#39;s starting to form, but it&#39;s still very hazy,&#34; he explained.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">A Changing Landscape</h2>

                <p className="text-lg text-gray-700 mb-4">
                In addition to Google Discover, other platforms like Reddit and news aggregator apps are beginning to drive
                more traffic, though from smaller bases. Meanwhile, traffic from Facebook has dropped by over 40% since
                January 2023.
                </p>

                <p className="text-lg text-gray-700 mb-4">
                For news publishers, the takeaway is clear: while social media referrals may be shrinking, new opportunities
                are emerging through platforms like Google Discover. By experimenting and adapting, publishers can capitalize
                on this growing source of traffic — even if it&#39;s still a bit of a mystery.
                </p>

                <hr className="my-6" />

                <p className="text-gray-600">
                *John Doe is a freelance journalist covering media trends and digital innovation. You can follow him on Twitter
                @JohnDoeMedia or reach out via email at johndoe@example.com.*
                </p>
            </div>
            </div>
        </>
  )
}

export default BlogPage