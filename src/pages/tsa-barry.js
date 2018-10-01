import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { TransitionMixin, media } from '../helpers';
import Helmet from 'react-helmet';
import Link, { withPrefix } from 'gatsby-link';

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

					span {
						font-size: 0.4em;
						display: block;
						letter-spacing: normal;
						color: #777;
					}
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

export default class TSAPage extends Component {
	render() {
		const { data } = this.props;

		return (
			<div>
				<Helmet title="TSA Barry | Sam Davidoff" />
				<PageBanner title="TSA Barry" sizes={data.barry.sizes} large={true} />
			</div>
		);
	}
}

export const query = graphql`
	query tsaQuery {
		barry: imageSharp(id: { regex: "/barry.png/" }) {
			sizes(quality: 100, maxWidth: 2100) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
