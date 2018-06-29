import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import '../assets/base.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { media } from '../helpers';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
	/* padding-top: 65px;

	${media.medium`padding-top: 0px;`}; */
`;

const TemplateWrapper = ({ children, data, history }) => (
	<Main>
		<Helmet
			link={[
				{
					rel: 'stylesheet',
					href:
						'https://fonts.googleapis.com/css?family=Lato:400,700,900|Nunito:300,400,700'
				},
				{
					rel: 'stylesheet',
					href:
						'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
				}
			]}
		/>
		<Header logo={data.logo} currentLink={history.location.pathname} />

		{children()}

		<Footer />
	</Main>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
export const query = graphql`
	query LayoutQuery {
		logo: imageSharp(id: { regex: "/logo.png/" }) {
			sizes(maxWidth: 1240) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
