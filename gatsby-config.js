module.exports = {
	siteMetadata: {
		title: 'Superstylin',
		description: 'A Gatsby Starter with styled-components'
	},
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/posts`,
				name: 'posts'
			}
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: 'outpost.waveymediagroup.com',
				protocol: 'http',
				hostingWPCom: false,
				useACF: true
			}
		}
	]
};
