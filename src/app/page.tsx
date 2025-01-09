import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "../app/sanity/client";
import About from './About/page';
import Contact from './contact/page';
import Comments from './comments/page'


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div>
      <div> 
 <h2 className='px-28 py-6 m-20 flex flex-wrap  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black text-white text-3xl text-center font-sans'>Know what you want to know about travelling!! See Blogs below  to discover!!!! </h2>
<div className='flex'><div className="  mx-5 text-center flex-1 w-16 h-16 rounded-md bg-[url('/back.png')] backdrop-brightness-90 "></div></div>
 <div>
    <main className="container text-center mx-36 px-72 text-emerald-400 "><br/>
      <h1 className="text-4xl text-green-950 tracking-wider text-center font-bold mb-8">BlogNature</h1>
      <ul className="flex gap-x-8 outline-8 rounded-md outline-green-600 border-green-900">
        {posts.map((post) => (
          <li className="hover:underline  " key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main><br/>    </div>
            <div className=' outline outline-2 flex flex-wrap  bg-white  '>
                
                
                <div><br/><div className='space-y-16'>
                    
                <div><Contact/></div>
                <div><About/></div>
               
                <div><Comments/></div></div></div></div></div></div>
     
    
  );
}