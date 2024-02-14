import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import Banner_720 from "@/banners/banner_720";

export default function Home() {
    console.log(allBlogs[0]) 
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <div className="max-w-[720px] mx-auto mt-8">
        <a target="_blank" href="https://shareasale.com/u.cfm?d=1077264&amp;m=35635&amp;u=4040299&amp;afftrack="><img src="https://static.shareasale.com/image/35635/DECEMBER-2023-OfficialHCGdietplan1.png" border="0" alt="Christmas Special Sale" /></a>
      </div>
      <RecentPosts blogs={allBlogs} />
      <div className="max-w-[720px] mx-auto mt-8">
        <Banner_720 />
      </div>
    </main>
  )
}
