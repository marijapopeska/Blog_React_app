import React from 'react'
import '../Blogs/Blogs.css'
import BlogItem from './BlogItem'


const Blogs = ({ blogs }) => {

	return (
		<div className='blogs-wrapper'>
			{blogs?.map(({ authorName, authorAvatar, cover, category, createdAt, description, id, title }) => (
				<BlogItem
					authorName={authorName}
					authorAvatar={authorAvatar}
					cover={cover}
					category={category}
					createdAt={createdAt}
					description={description}
					id={id}
					key={id}
					title={title}
				/>
			))}
		</div>
	)
}

export default Blogs