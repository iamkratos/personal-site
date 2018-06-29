import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionMixin, media } from '../helpers';
import Img from 'gatsby-image';

const GridPostWrap = styled.div`
	border: 1px solid #000;
	${TransitionMixin('.25s')};

	&:hover {
		-webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
			0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
		box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
			0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);

		.black-btn {
			background: #000;
			color: #fff !important;
		}
	}

	.portfolioBox {
		background-position: top center;
	}

	.portfolioThumbnail {
		height: 400px;
		position: relative;
	}

	.grid-post-body {
		padding: 10px 20px;
		min-height: 60px;
		display: grid;
		grid-template-columns: 45% 55%;
		align-items: center;
		${media.medium`min-height: 90px;`};
		h3 {
			float: left;
			margin-bottom: 0px;
			font-size: 20px;
			font-family: 'Nunito', sans-serif;
		}
		.btn-wrap {
			text-align: right;
			.black-btn {
				color: #000;
				border: 1px solid #000;
				padding: 10px 25px;
				${TransitionMixin('.25s')};
			}
		}

		.tags-wrap {
			float: right;

			h4 {
				margin-bottom: 0px;
				margin-top: 9px;
				text-align: right;
				font-size: 17px;
			}
			p {
				margin-top: 0px;
				font-size: 13px;
				text-align: right;
				margin-bottom: 0px;
			}
		}
	}

	a {
		color: #000;
		text-decoration: none;

		&:hover {
			color: #000;
		}
	}
`;
export default class WorkPreviewCard extends Component {
	render() {
		const post = this.props.post.node;
		return (
			<GridPostWrap>
				{post.acf.site_url ? (
					<a target={post.acf.site_url == '' ? '_self' : '_blank'} href="#">
						<div className="grid-post-header">
							<div className="lightbox">
								<div className="text-center portfolioThumbnail">
									{/* <div
										className="portfolioBox"
										style={{
											backgroundImage: `url(${
												post.better_featured_image.source_url
											})`
										}}
									/> */}
									<Img
										className="shift"
										sizes={post.featured_media.localFile.childImageSharp.sizes}
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											height: '100%'
										}}
									/>
								</div>
							</div>
						</div>
						<div className="grid-post-body">
							<div className="title-wrap">
								<h3>{post.title}</h3>
							</div>
							<div className="btn-wrap">
								{post.acf.site_url && (
									<button className="black-btn">Visit</button>
								)}
							</div>
						</div>
					</a>
				) : (
					<div className="linkless-wrap">
						<div className="grid-post-header">
							<div className="lightbox">
								<div className="text-center portfolioThumbnail">
									<Img
										sizes={post.featured_media.localFile.childImageSharp.sizes}
										style={{
											position: 'absolute',
											left: 0,
											top: 0,
											width: '100%',
											height: '100%'
										}}
									/>
								</div>
							</div>
						</div>
						<div className="grid-post-body">
							<div className="title-wrap">
								<h3>{post.title}</h3>
							</div>
							<div className="tags-wrap">
								<h4>
									<strong>Tags:</strong>
								</h4>
								<p>{post.acf.tags}</p>
							</div>
						</div>
					</div>
				)}
			</GridPostWrap>
		);
	}
}
