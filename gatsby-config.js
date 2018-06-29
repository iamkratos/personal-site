module.exports = {
	siteMetadata: {
		title: 'Sam Davidoff',
		description:
			"I'm a self-taught developer originally from San Francisco, now living in Brooklyn, NY.",
		siteUrl: 'https://www.samdavidoff.com'
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
		},
		{
			resolve: `gatsby-plugin-sitemap`
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/assets/images/nfavicon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}
	]
};
