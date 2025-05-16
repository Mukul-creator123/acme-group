import React from "react";

const Blog = () => {

    const blogPosts = [
        {
            image: "/Images/blog1.png",
            date: "08-11-2021",
            author: "acmegroup",
            title: "Believing neglected so so allowance existence departure.",
            description:
                "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
            link: "#",
        },
        {
            image: "/Images/blog2.png",
            date: "08-11-2021",
            author: "acmegroup",
            title: "In design active temper be uneasy. Thirty for remove plenty regard you.",
            description:
                "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality.",
            link: "#",
        },
    ];

    return (
        <section className="mx-auto lg:mt-12 mt-10 px-4 lg:px-6 pt-0 pb-0">
            <div className="lg:px-6 p-0 relative">
                <div className="flex lg:justify-between flex-col lg:flex-row gap-[20px] tems-start mb-6">
                    <h2 className="text-4xl font-bold text-gray-800">Our Latest Blog Posts</h2>
                    <button className="lg:w-fit w-1/2 bg-red-500 text-white px-8 py-3 rounded-full text-md">
                        See All Blog Posts
                    </button>
                </div>   

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPosts.map((post, idx) => (
                            <div className="blogImage" key={idx}>
                                <img src={post.image} alt="blog" />
                                <div className="p-0 mt-3">
                                    <p className="text-sm text-gray-500 mb-2">
                                        {post.date} &nbsp; Comment {post.author}
                                    </p>
                                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">{post.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                                    <a href={post.link} className="text-sm text-blue-600 underline">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col space-y-6 lg:pl-6 pl-0">
                        {[
                            "Partially on or continuing in particular principles",
                            "Do believing oh disposing to supported allowance we.",
                            "Village did removed enjoyed explain nor ham saw.",
                            "Securing as informed declared or margaret",
                        ].map((title, idx) => (
                            <div key={idx}>
                                <div className="pl-16 mb-6">
                                    <p className="text-sm text-gray-500 mb-1">08-11-2021 &nbsp; Comment acmegroup</p>
                                    <p className="text-sm font-bold text-gray-800 blogpostText">{title}</p>
                                </div>
                                {idx !== 3 && <hr className="mt-3" style={{ border: "1px solid #ddd" }} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
