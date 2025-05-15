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
        <section className="mx-auto mt-12 px-4 pt-0 pb-0">
            <div className="p-6 relative">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Our Latest Blog Posts</h2>
                    <button className="bg-red-500 text-white px-5 py-2 rounded-full text-sm">
                        See All Blog Posts
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPosts.map((post, idx) => (
                            <div className="blogImage" key={idx}>
                                <img src={post.image} alt="blog" />
                                <div className="p-3">
                                    <p className="text-sm text-gray-500 mb-2">
                                        {post.date} &nbsp; Comment {post.author}
                                    </p>
                                    <h3 className="font-semibold text-gray-800 mb-2">{post.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                                    <a href={post.link} className="text-sm text-blue-600 underline">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col space-y-6 pl-6">
                        {[
                            "Partially on or continuing in particular principles",
                            "Do believing oh disposing to supported allowance we.",
                            "Village did removed enjoyed explain nor ham saw.",
                            "Securing as informed declared or margaret",
                        ].map((title, idx) => (
                            <div key={idx}>
                                <p className="text-sm text-gray-500 mb-1">08-11-2021 &nbsp; Comment acmegroup</p>
                                <p className="text-sm font-bold text-gray-800">{title}</p>
                                {idx !== 3 && <hr className="mt-3 border-gray-200" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
