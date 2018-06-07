import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import moment from 'moment';
import { TransitionMixin, media } from '../../helpers';
import Img from 'gatsby-image';

const StyledPostList = styled.div`
	padding-top: 40px;
	ul {
		list-style-type: none;
		list-style: none;
		max-width: 90vw;
		margin: 0 auto;
		padding: 0px;
		${media.medium`max-width: 50vw;`};
		li {
			margin-bottom: 50px;
		}
	}

	a {
		font-size: 1.1rem;
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		color: #000;
		text-decoration: none;
		padding: 10px;
		align-items: center;
		text-align: center;
		${TransitionMixin('.25s')};
		${media.medium`text-align: left;`};
		span {
			text-align: center;
			display: block;
			margin-top: 5px;
			${media.medium`float: right; text-align: right;margin-top: 0px;`};
		}

		.post-grid-item-wrap {
			border: 1px solid #000;
			${TransitionMixin('.25s')};
		}

		&:hover {
			color: black;
			text-decoration: none;

			.post-grid-item-wrap {
				border-color: #000;
				-webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
					0 9px 46px 8px rgba(0, 0, 0, 0.12),
					0 11px 15px -7px rgba(0, 0, 0, 0.2);
				box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
					0 9px 46px 8px rgba(0, 0, 0, 0.12),
					0 11px 15px -7px rgba(0, 0, 0, 0.2);
			}
		}
	}

	.solid-bg {
		height: 400px;
		width: 100%;
		background: #777;
	}

	.image-content {
		max-height: 400px;
		overflow: hidden;
	}

	.text-content {
		margin-top: 10px;
		padding: 5px 10px;
		h3 {
			font-size: 17px;

			span {
				font-weight: bold;
			}
		}
	}
`;

const PostList = ({ posts }) => {
	return (
		<StyledPostList>
			<ul>
				{posts.map(({ node: post }) => {
					const m = moment(post.date, 'YYYY MM DD');
					const feat_image = post.featured_media ? (
						<Img sizes={post.featured_media.localFile.childImageSharp.sizes} />
					) : (
						<div className="solid-bg" />
					);

					return (
						<li key={post.id}>
							<Link to={post.slug}>
								<div className="post-grid-item-wrap">
									<div className="image-content">{feat_image}</div>
									<div className="text-content">
										<h3>
											{post.title}
											<span>{m.format('MMM Do YYYY')}</span>
										</h3>
									</div>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</StyledPostList>
	);
};

export default PostList;
