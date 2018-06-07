import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import WorkPreviewCard from '../components/WorkPreviewCard';
import { TransitionMixin, media } from '../helpers';
import PageBanner from '../components/PageBanner';
import ReactLoading from 'react-loading';

const poseProps = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
};

const WorkPreviewWrap = styled.div`
	${TransitionMixin('.25s')};
	opacity: 0;

	&.active {
		opacity: 1;
	}

	h1 {
		text-align: center;
		font-size: 40px;
		margin-bottom: 20px;
	}

	.inner-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 20px;
		max-width: 95vw;
		margin: 0 auto;
		padding-bottom: 70px;

		${media.medium`grid-template-columns: repeat(3, 1fr);`};
	}
`;

const StyledAbout = styled.div`
	position: relative;

	.about-section {
		.inner-wrap {
			max-width: 85vw;
			margin: 0 auto;
			padding: 40px 0px;
			display: grid;
			${media.medium`grid-template-columns: 48% 48%; grid-gap: 2%;`};

			.image-section {
				text-align: center;
				margin-bottom: 20px;
				.gatsby-image-wrapper {
					max-width: 300px;
					margin: 0 auto;
					border-radius: 50%;
				}
			}
			.text-section {
				align-self: center;

				p {
					margin: 0px;
					line-height: 35px;
					font-size: 18px;
				}
			}
		}
	}

	.recent-work {
		.spinner {
			margin: 0 auto;
		}
	}
`;

class WorkPreview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recent_posts: [],
			loaded: false
		};
	}

	componentDidMount() {
		let thisFreeze = this;
		fetch('http://outpost.waveymediagroup.com/wp-json/wp/v2/portfolio')
			.then(data => {
				return data.json();
			})
			.then(posts => {
				this.setState({
					recent_posts: posts
				});
			})
			.then(posts => {
				console.log(this);
				thisFreeze.setState({
					loaded: true
				});
			});
	}

	render() {
		const { recent_posts } = this.state || [];
		return (
			<Fragment>
				{this.state.loaded ? (
					<WorkPreviewWrap className={this.state.loaded ? 'active' : ''}>
						<h1>Recent Work</h1>
						<div className="inner-grid">
							{recent_posts.slice(0, 6).map(post => {
								return <WorkPreviewCard key={post.id} post={post} />;
							})}
						</div>
					</WorkPreviewWrap>
				) : (
					<ReactLoading
						type={'spin'}
						color={'#000'}
						height={70}
						width={70}
						className="spinner"
					/>
				)}
			</Fragment>
		);
	}
}

export default ({ data }) => (
	<StyledAbout>
		<PageBanner title="About" sizes={data.workbanner.sizes} large={true} />
		<div className="about-section">
			<div className="inner-wrap">
				<div className="image-section">
					<Img imgStyle={{ width: '300px' }} sizes={data.prof.sizes} />
				</div>
				<div className="text-section">
					<p>
						I'm a self-taught developer originally from San Francisco, now
						living in Brooklyn, NY. I spend the majority of my time working with
						Wordpress, React, and Shopify. When I'm not developing websites, I
						work as a digital brand consultant; I help businesses make more
						money through email campaigns, Facebook/Instagram ads, SEO
						strategies, and more.
					</p>
				</div>
			</div>
		</div>
		<section className="recent-work">
			<WorkPreview />
		</section>
	</StyledAbout>
);

export const query = graphql`
	query aboutPageQuery {
		workbanner: imageSharp(id: { regex: "/work-banner.png/" }) {
			sizes(quality: 100, maxWidth: 2100) {
				...GatsbyImageSharpSizes
			}
		}
		prof: imageSharp(id: { regex: "/prof.jpg/" }) {
			sizes(quality: 100, maxWidth: 800) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
