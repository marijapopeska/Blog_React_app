import React, { useState, useEffect  } from 'react'
import { Link, useParams } from 'react-router-dom'

import { allBlogs } from '../../config/blogs'

import CategoryLabel from '../CategoryLabel/CategoryLabel'
import EmptyList from '../../components/EmptyList/EmptyList'

import '../Blog/Blog.css'

const Blog = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        const blog = allBlogs.find((blog) => blog.id === parseInt(id))
        if (blog) {
            setBlog(blog)
        }
    }, [])

    return (
        <>
            <Link className='blog-goBack' to='/'>
                <span>&#8592;</span><span>Back</span>
            </Link>

            {
                blog ?
                    <div className='blog-wrap'>
                        <header>
                            <p className='blog-data'>Published {blog.createdAt}</p>
                            <h1>{blog.title}</h1>

                            <div className='blog-subCategory'>
                                {blog.subCategory.map((category) => (
                                    <div key={category}>
                                        <CategoryLabel label={category} />
                                    </div>
                                ))}
                            </div>
                        </header>

                        <img src={blog.cover} alt='cover' />
                        <p className='blog-desc'>{blog.description}</p>
                    </div> : <EmptyList/>
            }
        </>
    )
}

export default Blog