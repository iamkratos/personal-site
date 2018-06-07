import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul``;

const Menu = ({ children }) => {
	return <StyledMenu>{children}</StyledMenu>;
};

export default Menu;
