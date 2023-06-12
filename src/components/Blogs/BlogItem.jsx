import React from 'react'
import CategoryLabel from '../CategoryLabel/CategoryLabel'

const BlogItem = ({
	cover,
	category,
	title,
	description,
	authorAvatar,
	authorName,
	createdAt,
	id
}) => {
	return (
		<a className='blog-item' href={`/blog/${id}`}>
			<img
				className='blog-item-cover'
				src={cover}
				alt='cover'
			/>
			<CategoryLabel label={category} />
			<h3>{title}</h3>
			<p className='blog-item-desc'>{description}</p>
			<footer>
				<div className='blog-item-author'>
					<img
						src={authorAvatar}
						alt='avatar'
					/>
					<div>
						<h6>{authorName}</h6>
						<p>{createdAt}</p>
					</div>
				</div>
				{/* <a className='blog-item-link' href={`/blog/${id}`}> → </a> */}
			</footer>
		</a>
	)
}

export default BlogItem