import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	text-align: left;
	max-width: 90vw;
	margin: 30px auto 0px;
	h1 {
		font-family: 'Nunito', sans-serif;
		font-weight: 300;
		a {
			transition: all 0.3s ease-in-out;
			padding: 0 4px;
			color: black;
			text-decoration: none;
			&:hover {
				color: white;
				background: black;
			}
		}
	}
`;

const Header = ({ children }) => {
	return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
