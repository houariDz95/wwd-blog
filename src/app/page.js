import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import Banner_720 from "@/banners/banner_720";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <div className="max-w-[720px] mx-auto mt-8 overflow-hidden">
        <Banner_720 />
      </div>
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
