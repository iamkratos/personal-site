import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { media } from '../../helpers';
import Menu from '../Menu';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MobileWrap = styled.div`
	text-align: right;
	display: block;

	${media.medium`display: none;`};
`;

const MobileMenu = styled.ul`
	padding-left: 0px;
	list-style: none;

	li {
		margin-bottom: 10px;
		a {
			color: #fff;
			font-size: 19px;
		}
	}
`;

const StyledHeader = styled.div`
	position: absolute;
	z-index: 1000;
	width: 100%;
	top: 0px;
	left: 0px;
	background: #000;
	z-index: 2000;
	${media.medium`background: transparent;top: 10px;`};

	.wrapper {
		margin: 0 auto;
		max-width: 90vw;
	}
	.content-wrap {
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
		${media.large`display: grid; `};
	}

	.logo-section {
		.logo-wrap {
			a {
				color: #fff;
				text-decoration: none;
				display: inline-block;

				h1 {
					font-family: 'Nunito', sans-serif;
					font-weight: 300;
					font-size: 20px;
					margin-bottom: 0px;
					${media.medium`font-size: 40px;`};
				}
			}
		}
	}

	.link-section {
		align-self: center;

		.link-wrap {
			display: none;
			${media.medium`display: block;`};
			ul {
				text-align: right;
				margin: 0px;
				padding: 0px;
				li {
					display: inline-block;
					margin-right: 20px;

					a {
						color: #fff;
						text-decoration: none;
						font-size: 17px;
						font-family: 'Nunito', sans-serif;
					}
				}
			}
		}
	}

	&.hide {
		display: none;
	}
`;

class HamburgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
		// Mobile menu
		const btn = document.querySelector('.hamburger--slider');
		btn.classList.toggle('is-active');
	}
	render() {
		return (
			<div>
				<MobileWrap>
					<button onClick={this.toggle} className="hamburger hamburger--slider">
						<div className="hamburger-box">
							<div className="hamburger-inner" />
						</div>
					</button>
				</MobileWrap>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					{/* <ModalHeader toggle={this.toggle}>Sam Davidoff</ModalHeader> */}
					<ModalBody>
						<MobileMenu>
							<li>
								<Link onClick={this.toggle} to="/about">
									About
								</Link>
							</li>
							<li>
								<Link onClick={this.toggle} to="/blog">
									Blog
								</Link>
							</li>
							<li>
								<Link onClick={this.toggle} to="mailto:sam@waveymediagroup.com">
									Contact
								</Link>
							</li>
						</MobileMenu>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const Header = ({ children, logo }) => {
	return (
		<StyledHeader
			className={`${window.location.pathname == '/resume' ? 'hide' : ''}`}
		>
			<div className="wrapper">
				<div className="content-wrap">
					<div className="logo-section">
						<div className="logo-wrap">
							<Link to="/">
								<h1>Sam Davidoff</h1>
							</Link>
						</div>
					</div>
					<div className="link-section">
						<div className="link-wrap">
							<LinkList />
						</div>
						<HamburgerMenu />
					</div>
				</div>
			</div>
		</StyledHeader>
	);
};

const LinkList = () => (
	<Menu>
		<li>
			<Link to="/about">About</Link>
		</li>
		<li>
			<Link to="/blog">Blog</Link>
		</li>
		<li>
			<a href="mailto:sam@waveymediagroup.com">
				<i className="fa fa-envelope" />
			</a>
		</li>
		<li>
			<a href="https://github.com/iamkratos" target="_blank">
				<i className="fa fa-github" />
			</a>
		</li>
	</Menu>
);

export default Header;
