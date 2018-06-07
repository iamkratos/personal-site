import React from 'react';
import PostList from '../components/PostList';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PageBanner from '../components/PageBanner';

const BlogBanner = styled.div`
	.gatsby-image-wrapper {
		height: 350px;
	}

	.banner-content {
		position: absolute;
		top: 15%;
		left: 0;
		right: 0;
		text-align: center;

		.title-wrap {
			h1 {
				color: #fff;
				font-size: 50px;
				text-transform: uppercase;
				font-family: 'Nunito', sans-serif;
				font-weight: 300;
			}
		}
	}
`;

export default ({ data }) => {
	const posts = data.allWordpressPost.edges;

	return (
		<div>
			<PageBanner title="Blog" sizes={data.header.sizes} />
			<PostList posts={posts} />
		</div>
	);
};

// eslint-disable-next-line
export const pageQuery = graphql`
	query IndexQuery {
		allWordpressPost {
			edges {
				node {
					title
					slug
					date
					id
					featured_media {
						localFile {
							childImageSharp {
								sizes(quality: 100, maxWidth: 2100) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		}

		header: imageSharp(id: { regex: "/blog.png/" }) {
			sizes(quality: 100, maxWidth: 2000) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
