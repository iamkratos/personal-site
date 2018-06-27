import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { TransitionMixin, media } from '../helpers';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const BigTitleWrap = styled.div`
	margin-bottom: 20px;
	text-align: center;
	${media.large`text-align: left;`};
	.inner-wrap {
		background: #000;
		display: inline-block;
		padding: 10px 20px;
		h1 {
			color: #fff;
			margin-bottom: 0px;
		}
	}
`;

const SplitGrid = styled.div`
	${media.large`display: grid; grid-template-columns: 30% 70%;`};
	p {
		font-size: 15px;
		line-height: 27px;
	}

	.sidebar {
		position: relative;

		> .inner-wrap {
			background: #000;

			${media.large`height: 100vh; width: 30%;position: fixed;`};
		}

		.prof-section {
			padding-top: 40px;
			text-align: center;
			.prof-wrap {
				position: relative;
				margin: 0 auto;
				max-width: 150px;
				${media.large`max-width: 200px;`};
				${media.xl`max-width: 250px;`};
			}

			.title {
				padding: 20px 0px;

				h1 {
					color: #fff;
					font-family: 'Lato', sans-serif;
					letter-spacing: 2px;
				}
			}

			.contact-box {
				.inner-wrap {
					border: 1px solid #fff;
					max-width: 300px;
					margin: 0 auto;

					ul {
						list-style: none;
						padding: 20px 0px;
						margin: 0px;

						li {
							display: inline-block;
							margin: 0px 10px;

							a {
								&:hover,
								&:active,
								&:focus {
									text-decoration: none;
								}
							}
						}
					}
				}
			}

			.toolkit {
				margin-top: 40px;
				${media.xl`margin-top: 90px;`};
				.inner-wrap {
					max-width: 300px;
					margin: 0 auto;
				}
				h2 {
					color: #fff;
					font-family: 'Lato', sans-serif;
					text-align: center;
					font-size: 21px;
					${media.large`text-align: left;`};
				}

				ul {
					padding: 0px;
					list-style: none;
					text-align: center;
					${media.large`text-align: left;`};
					li {
						color: #777;
					}
				}
			}
		}
	}

	.primary-content {
		max-width: 800px;
		margin: 50px auto 0px;
		padding: 0px 20px;

		${media.large`padding: 0px;`};

		h1 {
			font-size: 25px;
		}

		.summary,
		.experience {
			margin-bottom: 40px;
			${media.xl`margin-bottom: 70px;`};
		}

		.experience {
			.job-wrap {
				.job {
					.job-header {
						border-bottom: 1px solid #efefef;
						padding: 20px 0px;

						${media.large`display: grid; grid-template-columns: 19% 35% 25% 20%; grid-gap: 3%;`};
						.job-image {
							max-width: 85px;
							margin: 0 auto;

							${media.large`margin: 0;`};
						}
						.job-title {
							align-self: center;
							text-align: center;
							${media.large`text-align: left;`};
							h3 {
								font-family: 'Roboto', sans-serif;
								font-weight: 400;
								margin: 0px;
								font-size: 20px;
								letter-spacing: 1px;
								color: #000;
								span {
									font-size: 17px;
									font-weight: 300;
									color: #777;
									display: block;
									letter-spacing: 1px;
									margin: 5px 0px;
								}
							}
						}
						.job-date {
							margin: 5px 0px;
						}

						.job-date {
							align-self: center;
							text-align: center;
							${media.large`text-align: left;`};
							h3 {
								font-family: 'Roboto', sans-serif;
								font-weight: 300;
								font-size: 17px;
								margin: 0px;
								color: #777;
							}
						}
					}
					.job-body {
						${TransitionMixin('.25s')};
						max-height: 100%;
						display: none;
						border-bottom: 1px solid #efefef;
						ul {
							padding: 30px 0px 30px 20px;
							margin: 0px;
							li {
								font-size: 15px;
								margin-bottom: 10px;
							}
						}

						&.active {
							display: block;
						}
					}

					.no-dot {
						list-style: none;
					}

					.job-toggle {
						align-self: center;
						text-align: center;
						a {
							font-size: 30px;
							color: #000;

							i {
								font-size: 30px;
								${TransitionMixin('.25s')};
								&.active {
									transform: rotate(180deg);
								}
							}
						}
					}
				}
			}
		}

		.education {
			padding-bottom: 70px;
			.school-wrap {
				padding: 20px 0px 20px;
				.school {
					.school-header {
						text-align: center;
						${media.large`text-align: left; display: grid; grid-template-columns: 19% 35% 45%;`};
						.school-image {
							max-width: 70px;
							margin: 0px auto 10px;
							${media.large`margin: 0px;`};

							&.marked {
								border: 1px solid #efefef;
							}
						}

						.school-title {
							align-self: center;
							margin: 5px 0px;
							h3 {
								font-size: 20px;
								font-family: 'Roboto', sans-serif;
								letter-spacing: 1px;
								color: #000;
								margin: 0px;

								span {
									color: #777;
									font-size: 16px;
									display: block;
									font-weight: 300;
									letter-spacing: 1px;
									margin: 5px 0px;
								}
							}
						}

						.school-date {
							align-self: center;
							text-align: center;
							margin: 5px 0px;
							h3 {
								font-family: 'Roboto', sans-serif;
								font-weight: 300;
								font-size: 17px;
								margin: 0px;
								color: #777;
							}
						}
					}
				}
			}
		}
	}
`;

export default class ResumePage extends Component {
	state = {
		activeJob: 0
	};

	toggleJobDescription = e => {
		e.preventDefault();
		console.log(e.target.parentElement.dataset.job);

		if (e.target.parentElement.classList.contains('active')) {
			this.setState({
				activeJob: 0
			});
		} else {
			this.setState({
				activeJob: [e.target.parentElement.dataset.job]
			});
		}
	};

	render() {
		const { data } = this.props;
		return (
			<div>
				<Helmet title="Resume | Sam Davidoff" />
				<SplitGrid>
					<div className="sidebar">
						<div className="inner-wrap">
							<div className="prof-section">
								<div className="prof-wrap">
									<Img
										sizes={data.prof.sizes}
										imgStyle={{ borderRadius: '50%' }}
									/>
								</div>
								<div className="title">
									<h1>Sam Davidoff</h1>
								</div>
								<div className="contact-box">
									<div className="inner-wrap">
										<ul>
											<li>
												<Link target="_blank" to="/">
													Website
												</Link>
											</li>
											<li>
												<a href="mailto:sam@waveymediagroup.com">Email</a>
											</li>
											<li>
												<a target="_blank" href="https://github.com/iamkratos">
													Github
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="toolkit">
									<div className="inner-wrap">
										<div className="title">
											<h2>Toolkit</h2>
											<ul>
												<li>HTML</li>
												<li>SCSS</li>
												<li>PHP</li>
												<li>Pug</li>
												<li>Javascript (React, Node, Vanilla)</li>
												<li>Wordpress</li>
												<li>Shopify</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="primary-content">
						<div className="summary">
							<BigTitleWrap>
								<div className="inner-wrap">
									<h1>Summary</h1>
								</div>
							</BigTitleWrap>
							<p>
								I'm a self-taught web developer now living in Brooklyn, NY. I
								mostly work with Wordpress, Shopify, and React. Recently, I have
								focused more on working with Javascript, specifically React,
								Node, and GatsbyJS.
							</p>
							<p>
								I'm great comunnicator and understand the importance of
								deadlines. I also publicly acknowledge I do not know everything
								about web development, but anything I don't know I can look up,
								understand, and implement.
							</p>
						</div>
						<div className="experience">
							<BigTitleWrap>
								<div className="inner-wrap">
									<h1>Experience</h1>
								</div>
							</BigTitleWrap>

							<div className="job-wrap">
								<div className="job">
									<div className="job-header">
										<div className="job-image">
											<Img sizes={data.wmg.sizes} />
										</div>
										<div className="job-title">
											<h3>
												Wavey Media Group <span>Lead Developer</span>
											</h3>
										</div>

										<div className="job-date">
											<h3>2012 - Present</h3>
										</div>
										<div className="job-toggle">
											<a
												href="#"
												data-job="3"
												onClick={this.toggleJobDescription}
												className={this.state.activeJob == 3 ? 'active' : ''}
											>
												<i
													className={
														this.state.activeJob == 3
															? 'fa fa-angle-down active'
															: 'fa fa-angle-down'
													}
												/>
											</a>
										</div>
									</div>
									<div
										className={
											this.state.activeJob == 3 ? 'job-body active' : 'job-body'
										}
									>
										<ul>
											<li>
												Wavey Media Group is a company I created to take on
												larger projects with a small team of creatives.
											</li>
											<li>
												We specialize in designing and developing Wordpress,
												Shopify, and React builds. We're also pros at
												integrating mailing list CTAs, as well as developing
												rich SEO content.
											</li>
											<li>
												We collaborate with companies to create a unique user
												experience with every website we ship.
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Kombind */}
							<div className="job-wrap">
								<div className="job">
									<div className="job-header">
										<div className="job-image">
											<Img sizes={data.kombind.sizes} />
										</div>
										<div className="job-title">
											<h3>
												KOMBIND<span>Director of Digital Services</span>
											</h3>
										</div>

										<div className="job-date">
											<h3>March 2015 - Feb 2017</h3>
										</div>
										<div className="job-toggle">
											<a
												href="#"
												data-job="2"
												onClick={this.toggleJobDescription}
												className={this.state.activeJob == 2 ? 'active' : ''}
											>
												<i
													className={
														this.state.activeJob == 2
															? 'fa fa-angle-down active'
															: 'fa fa-angle-down'
													}
												/>
											</a>
										</div>
									</div>
									<div
										className={
											this.state.activeJob == 2 ? 'job-body active' : 'job-body'
										}
									>
										<ul class="no-dot">
											<li>
												Oversaw/excecuted Wordpress builds for various athletic
												companies
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* TB */}
							<div className="job-wrap">
								<div className="job">
									<div className="job-header">
										<div className="job-image">
											<Img sizes={data.tb.sizes} />
										</div>
										<div className="job-title">
											<h3>
												Tech &amp; Bowery <span>Junior Developer</span>
											</h3>
										</div>

										<div className="job-date">
											<h3>Sep 2014 - Feb 2015</h3>
										</div>
										<div className="job-toggle">
											<a
												href="#"
												data-job="1"
												onClick={this.toggleJobDescription}
												className={this.state.activeJob == 1 ? 'active' : ''}
											>
												<i
													className={
														this.state.activeJob == 1
															? 'fa fa-angle-down active'
															: 'fa fa-angle-down'
													}
												/>
											</a>
										</div>
									</div>
									<div
										className={
											this.state.activeJob == 1 ? 'job-body active' : 'job-body'
										}
									>
										<ul>
											<li>
												Lead teams in developing front-end websites from
												start-to-finish (Layout, Content, Functionality,
												Styling)
											</li>
											<li>
												Created entire E-Commerce systems using Woo Commerce,
												Shopify, and Magento
											</li>
											<li>
												Organized + conducted photoshoots for Nike, Puma,
												Adidas, Timberland.
											</li>
											<li>Coded and maintained MailChimp email campaigns</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="education">
							<BigTitleWrap>
								<div className="inner-wrap">
									<h1>Education</h1>
								</div>
							</BigTitleWrap>
							<div className="school-wrap">
								<div className="school">
									<div className="school-header">
										<div className="school-image">
											<Img sizes={data.ns.sizes} />
										</div>
										<div className="school-title">
											<h3>
												The New School <span>B.A in Non-Fiction Writing</span>
											</h3>
										</div>
										<div className="school-date">
											<h3>2012-2016</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="school-wrap">
								<div className="school">
									<div className="school-header">
										<div className="school-image marked">
											<Img sizes={data.drew.sizes} />
										</div>
										<div className="school-title">
											<h3>
												Drew <span>High School Diploma</span>
											</h3>
										</div>
										<div className="school-date">
											<h3>2008-2012</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SplitGrid>
			</div>
		);
	}
}

export const query = graphql`
	query resumeQuery {
		prof: imageSharp(id: { regex: "/prof.jpg/" }) {
			sizes(quality: 100, maxWidth: 800) {
				...GatsbyImageSharpSizes
			}
		}
		tb: imageSharp(id: { regex: "/tb.png/" }) {
			sizes(quality: 100, maxWidth: 150) {
				...GatsbyImageSharpSizes
			}
		}
		kombind: imageSharp(id: { regex: "/newkombind.png/" }) {
			sizes(quality: 100, maxWidth: 150) {
				...GatsbyImageSharpSizes
			}
		}
		wmg: imageSharp(id: { regex: "/wmg.png/" }) {
			sizes(quality: 100, maxWidth: 150) {
				...GatsbyImageSharpSizes
			}
		}
		ns: imageSharp(id: { regex: "/ns.png/" }) {
			sizes(quality: 100, maxWidth: 150) {
				...GatsbyImageSharpSizes
			}
		}
		drew: imageSharp(id: { regex: "/drew.png/" }) {
			sizes(quality: 100, maxWidth: 150) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
