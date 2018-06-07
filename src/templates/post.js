import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Post from '../components/Post';
import Link from 'gatsby-link';
import { media } from '../helpers';

const BackWrap = styled.div`
	position: fixed;
	bottom: 0;
	background: #000;
	width: 100%;
	text-align: center;
	display: none;
	${media.medium`display: block;`};

	a {
		color: #fff;
		text-decoration: none;
		display: grid;
		padding: 30px 0px;
		height: 100%;

		&:hover,
		&:visited,
		&:active,
		&:focus {
			color: #fff;
			text-decoration: none;
		}
	}
`;

export default function Template({ data }) {
	console.log(this);
	return (
		<div>
			<Helmet title={data.wordpressPost.title} />
			<Post postData={data.wordpressPost} />
			<BackWrap>
				<Link to="/blog">
					<span className="inner-wrap">Back to Blog</span>
				</Link>
			</BackWrap>
		</div>
	);
}

// eslint-disable-next-line
export const postQuery = graphql`
	query BlogPostByPath($slug: String!) {
		wordpressPost(slug: { eq: $slug }) {
			id
			title
			content
			slug
			date
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
`;
