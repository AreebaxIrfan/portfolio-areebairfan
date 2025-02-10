import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const page = () => {
    return (
        <>  
            <div className='min-h-screen bg-black text-white p-4'>
                <h1 className='text-6xl font-bold mb-8 text-center text-pink-600 p-4'>&lt;Portfolio/&gt;</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-7 p-2'>
                     <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/SHO-2.png"
                            alt="Marketplace Website"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Marketplace E-Commerce</h1>
                            <p className='text-gray-300 mb-4'>A feature-rich marketplace with authentication, product filtering, cart, and admin dashboard.</p>
                            <Link href='https://niky-shoes.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>View Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/BLOG-1.png"
                            alt="Blog Website"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>A modern blog website using Next.js, Tailwind CSS, and CMS integration.</p>
                            <Link href='http://blog-website-khaki-eight.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>View Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/book-1.png"
                            alt="Book API"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Book API Project</h1>
                            <p className='text-gray-300 mb-4'>A book website with applied the crud functinality , built with Next.js.</p>
                            <Link href='https://book-website-areeba-irfan.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>View Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60 '>
                        <Image
                            src="/blog-web.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6 '>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://my-blog-web-gilt.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/todo-list.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>To Do List</h1>
                            <p className='text-gray-300 mb-4'>This the to-do List website, i used the next.js concepts Like usestate and the useEffect and also used the tailwind.css</p>
                            <Link href='https://to-do-listxyz.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/web-1.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Clone Website</h1>
                            <p className='text-gray-300 mb-4'>This the Clone website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://music-course-web.vercel.app/?vercelToolbarCode=C4F9jeV3oPGtVJH' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/calculator.png"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Calculator</h1>
                            <p className='text-gray-300 mb-4'>This the Calculator that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://calculator-seven-taupe-23.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/web-2.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Blog Website</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the next.js concepts and also used the tailwind.css</p>
                            <Link href='https://e-comerce-website-three.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                    <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/60'>
                        <Image
                            src="/web_2.jpg"
                            alt="website-image"
                            width={400}
                            height={200}
                            className='w-full h-48 object-cover'
                        />

                        <div className='p-6'>
                            <h1 className='text-3xl font-bold mb-2'>Cursor Moving With Mouse</h1>
                            <p className='text-gray-300 mb-4'>This the blog website that i used the simple HTML , CSS and java</p>
                            <Link href='https://move-cursur.vercel.app/' className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Viewed Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
