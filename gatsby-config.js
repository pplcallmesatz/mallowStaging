/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    plugins: [
        /* CSS Preprocessor */
        `gatsby-plugin-sass`,
        /* Google Font */
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Open Sans\::300,300i,400,400i,600,600i,700,700i,800,800i`,
                ],
                display: 'swap'
            }
        },
        /* Progressive Web app */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `static/favicon.ico`, // This path is relative to the root of the site.
            },
        },
        /* Offline support */
        `gatsby-plugin-offline`,
        /* SEO */
        `gatsby-plugin-react-helmet`,
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
                ignore: [`**/\_*`],
            },
        },
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         path: `${__dirname}/src/img`,
        //         name: 'images',
        //     },
        // },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        // {
        //     resolve: `gatsby-plugin-typography`,
        //     options: {
        //         pathToConfigModule: `src/utils/typography`,
        //     },
        // },
    ],
}
