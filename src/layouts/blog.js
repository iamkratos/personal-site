import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { media } from '../helpers';
import Header from '../components/Header';

const Main = styled.main`
	padding-top: 65px;
	${media.medium`padding-top: 0px;`};
`;

const TemplateWrapper = ({ children, location }) => (
	<Main>
		<Helmet
			title="Sam Davidoff | Digital Brand Strategist"
			link={[
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
				},
				{
					rel: 'stylesheet',
					href:
						'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
				}
			]}
		/>
		<Header>
			<h1>
				<Link to={location.pathname === '/blog' ? '/' : '/blog'}>
					Sam Davidoff
				</Link>
			</h1>
		</Header>

		{children()}
	</Main>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
