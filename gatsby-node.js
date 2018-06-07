const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	const postTemplate = path.resolve('src/templates/post.js');
	return new Promise((resolve, reject) => {
		graphql(
			`
				{
					allWordpressPost {
						edges {
							node {
								id
								title
								content
								slug
							}
						}
					}
				}
			`
		).then(result => {
			if (result.errors) {
				console.log(result.errors);
			}

			result.data.allWordpressPost.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: postTemplate,
					layout: 'blog',
					context: {
						slug: node.slug
					}
				});
			});
			resolve();
		});
	});
};
