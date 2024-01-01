import { allBlogs } from "@/.contentlayer/generated";
import Banner_350 from "@/banners/banner_350";
import Banner_720 from "@/banners/banner_720";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";
import Script from "next/script";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}


const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="max-w-7xl mx-auto mt-5 sm:mt-10 md:mt-24 sxl:mt-32">
        <div id="container-7d56700dd5a27d1bff2cf4b9a2774565"></div>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16  px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
      <div className="lg:min-w-[752px] w-full mx-auto  flex items-center justify-center mt-6">
        <a className="hidden lg:block" target="_blank" href="https://shareasale.com/r.cfm?b=1863281&amp;u=4040299&amp;m=35635&amp;urllink=&amp;afftrack="><img src="https://static.shareasale.com/image/35635/Untitleddesign-High-Quality2_01.jpg" border="0" alt="Increase metabolism" /></a>
        <Banner_350 />
        <a className="hidden lg:block" target="_blank" href="https://shareasale.com/r.cfm?b=2467771&amp;u=4040299&amp;m=35635&amp;urllink=&amp;afftrack="><img src="https://static.shareasale.com/image/35635/November-2023-OfficialHCGDietPlanGET.png" border="0" alt="Black Friday Special Sale" /></a>
      </div>
    </article>
  );
};

export default CategoryPage;
