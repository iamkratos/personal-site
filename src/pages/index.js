import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../helpers';

const TopBannerWrap = styled.div`
	height: 101vh;
	position: relative;
	z-index: 5;
	.gatsby-image-wrapper {
		height: 101vh;
	}
	.content-wrap {
		position: absolute;
		bottom: 43%;
		width: 100%;
		text-align: center;
		z-index: 20;

		${media.xl`bottom: 48%;`};

		h1 {
			color: #fff;
			font-weight: 300;
			font-size: 40px;

			${media.medium`font-size: 60px;`};
		}
	}

	.overlay {
		background: rgba(0, 0, 0, 0.52);
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
`;

class IndexPage extends React.Component {
	componentDidMount() {
		document.body.style.overflowY = 'hidden';
	}
	componentWillUnmount() {
		document.body.style.overflowY = 'auto';
	}
	render() {
		const { data } = this.props;
		return (
			<TopBannerWrap>
				<Img sizes={data.banner.sizes} />

				<div className="content-wrap">
					<h1>I design unique web experiences</h1>
				</div>
				<div className="overlay" />
			</TopBannerWrap>
		);
	}
}

export default IndexPage;

export const query = graphql`
	query IndexPageQuery {
		banner: imageSharp(id: { regex: "/city.jpg/" }) {
			sizes(quality: 100, maxWidth: 2100) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
