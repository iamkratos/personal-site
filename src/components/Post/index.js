import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PageBanner from '../PageBanner';
import { media } from '../../helpers';

const StyledPost = styled.div`
	padding: 2rem 1.5rem 10rem;

	${media.medium`padding: 2rem 2rem 10rem;`};
	width: 100%;
	box-sizing: border-box;

	h1 {
		color: #1a1a1a;
		font-family: 'Poppin', sans-serif;
		font-weight: 700;
		text-align: center;
		font-size: 1.6rem;
		@media (min-width: 768px) {
			font-size: 2rem;
		}
	}
	p {
		font-size: 16px;
		${media.medium`font-size: 19px;`};
	}
	.postBody {
		font-family: 'Lato', sans-serif;
		display: block;
		margin: 0 auto;
		width: 100%;
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #414141;
		@media (min-width: 768px) {
			width: 60%;
		}
	}

	.course {
		border-bottom: 1px solid #000;
		border-left: 1px solid #000;
		border-right: 1px solid #000;
		padding: 40px;

		a {
			text-decoration: none;
			color: #000;
			font-weight: bold;
			font-size: 17px;
		}
	}

	.course:first-child {
		border-top: 1px solid #000;
	}
`;

const Post = ({ postData }) => {
	const { title, content, date, slug, featured_media } = postData;
	const m = moment(date, 'YYYY MM DD');
	return (
		<div>
			<PageBanner
				sizes={
					featured_media ? featured_media.localFile.childImageSharp.sizes : ''
				}
				title={title}
				date={m}
			/>
			<StyledPost>
				<div
					className="postBody"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</StyledPost>
		</div>
	);
};

export default Post;
