import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import WorkPreviewCard from '../components/WorkPreviewCard';
import { TransitionMixin, media } from '../helpers';
import PageBanner from '../components/PageBanner';
import witch from '../assets/witch.png';

import Helmet from 'react-helmet';

const FlyingWitch = styled.div`
	background: blue;
	display: inline-block;
	border-radius: 50%;
	padding: 50px;
	position: absolute;
	${TransitionMixin('.65s')};

	&.p1 {
		padding-left: 70vw;
	}

	img {
		${TransitionMixin('.65s')};
		&.flip-1 {
			transform: rotate(110deg) rotateX(200deg);
		}
		&.flip-2 {
			transform: rotate(300deg) rotateX(0deg);
		}
		&.flip-3 {
			transform: rotate(360deg) rotateX(0deg);
		}
	}

	&.p2 {
		padding-top: 50vh;
	}
`;

export default class Story extends Component {
	constructor() {
		super();
	}

	flyWitch = () => {
		let witch = document.querySelector('#flying-witch');
		witch.classList.add('p1');

		setTimeout(function() {
			witch.querySelector('img').classList.add('flip-1');

			setTimeout(function() {
				witch.classList.add('p2');

				setTimeout(function() {
					witch.classList.remove('p1');

					setTimeout(function() {
						witch.querySelector('img').classList.remove('flip-1');
						witch.querySelector('img').classList.add('flip-2');

						setTimeout(function() {
							witch.classList.remove('p2');
							witch.querySelector('img').classList.remove('flip-2');
						}, 600);
					}, 300);
				}, 300);
			}, 300);
		}, 400);
	};

	render() {
		const { data } = this.props;
		return (
			<div>
				<h1>My Story</h1>
				<FlyingWitch id="flying-witch" onClick={this.flyWitch}>
					<img src={witch} alt="" />
				</FlyingWitch>
			</div>
		);
	}
}
