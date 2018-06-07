import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../helpers';

const Banner = styled.div`
	position: relative;
	.banner-wrap {
		position: relative;
		.gatsby-image-wrapper {
			max-height: 550px;
			height: 350px;
			${media.medium`max-height: 350px;`};
		}

		.static-page-banner {
			max-height: 550px;
			height: 300px;
			background-size: cover;
			background-position: center;
			background-color: #000;

			${media.large`height: 450px;`};

			${media.xl`height: 550px;`};
		}
	}
	.overlay {
		height: 100%;
		background: rgba(20, 20, 20, 0.4);
		position: absolute;
		top: 0;
		width: 100%;
	}

	.banner-content {
		position: absolute;
		top: 130px;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 1;
		${media.medium`top: 46%;`};
		${media.xl`top: 50%;`};
		.title-wrap {
			padding: 0px 10px;

			${media.medium`padding: 0px;`};
			h1 {
				color: #fff;
				font-size: 22px;
				text-transform: uppercase;
				font-family: 'Nunito', sans-serif;
				font-weight: 300;
				margin-bottom: 0px;
				${media.medium`font-size: 50px;`};
			}

			p {
				color: #fff;
				font-size: 17px;
				margin-top: 5px;

				${media.medium`font-size: 21px;`};
			}
		}
		&.large {
			h1 {
				font-size: 40px;
			}
		}
	}
`;

export default class PageBanner extends Component {
	render() {
		const { title, date } = this.props;
		return (
			<Banner>
				<div className="banner-wrap">
					{this.props.sizes ? (
						<Img sizes={this.props.sizes} />
					) : (
						<div
							style={{
								background: `linear-gradient(rgba(20,20,20,.6),rgba(20,20,20,.6)) 0 0/cover,url(${
									this.props.url
								}) center/cover no-repeat`
							}}
							className="static-page-banner"
						/>
					)}
					<div
						className={
							this.props.large ? 'banner-content large' : 'banner-content'
						}
					>
						<div className="title-wrap">
							<h1 dangerouslySetInnerHTML={{ __html: title }} />

							{date && (
								<p id="date">Published on {date.format('MMM Do YYYY')}</p>
							)}
						</div>
					</div>
				</div>
				<div className="overlay" />
			</Banner>
		);
	}
}
