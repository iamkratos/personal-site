import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import moment from 'moment';
import { TransitionMixin, media } from '../../helpers';

const StyledPostList = styled.div`
	padding-top: 40px;
	ul {
		list-style-type: none;
		list-style: none;
		max-width: 90vw;
		margin: 0 auto;
		padding: 0px;
		${media.medium`max-width: 50vw;`};
	}

	a {
		font-size: 1.1rem;
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		color: red;
		text-decoration: none;
		padding: 10px;
		grid-template-columns: 50% 50%;
		align-items: center;
		text-align: center;
		display: block;
		${TransitionMixin('.25s')};
		${media.medium`display: grid; text-align: left;`};
		span {
			text-align: center;
			display: block;
			margin-top: 5px;
			${media.medium`text-align: right;margin-top: 0px;`};
		}
		&:hover {
			background: red;
			color: white;
			text-decoration: none;
		}
	}
`;

const PostList = ({ posts }) => {
	return (
		<StyledPostList>
			<ul>
				{posts.map(({ node: post }) => {
					const m = moment(post.frontmatter.date, 'YYYY MM DD');
					return (
						<li key={post.id}>
							<h2>
								<Link to={post.frontmatter.path}>
									{post.frontmatter.title}
									<span>{m.format('MMM Do YYYY')}</span>
								</Link>
							</h2>
						</li>
					);
				})}
			</ul>
		</StyledPostList>
	);
};

export default PostList;
