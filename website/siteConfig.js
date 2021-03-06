/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'Baidu',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: 'https://www.baidu.com/img/bd_logo1.png',
        infoLink: 'http://www.baidu.com',
        pinned: true,
    },
];

const siteConfig = {
    title: 'RCRE', // Title for your website.
    tagline: 'Build complex applications without tears',
    url: 'https://andycall.github.io', // Your website URL
    baseUrl: '/RCRE/', // Base URL for your project */
    // Used for publishing and more
    projectName: 'RCRE',
    organizationName: 'andycall',

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {
            doc: 'overview',
            label: 'Docs'
        },
        { page: 'users', label: 'Users' },
        {
            href: 'https://github.com/andycall/RCRE',
            label: 'GitHub',
        },
        // {doc: 'doc1', label: 'Docs'},
        // {doc: 'doc4', label: 'API'},
        // {page: 'help', label: 'Help'},
        // {blog: true, label: 'Blog'},
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: '',
    footerIcon: '',
    // favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#111',
        secondaryColor: '#111',
        grayDarker: '#333',
        gray: '#555',
        grayLighter: '#888',
        accentColor: '#785BA3',
        actionColor: '#008cf2',
    },

    editUrl: 'https://github.com/andycall/RCRE/edit/master/docs/',

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} AndyCall`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/RCRE/js/code-block-button.js',
    ],
    stylesheets: ['/RCRE/css/code-block-button.css'],

    // Add custom scripts here that would be placed in <script> tags.

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    docsSideNavCollapsible: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    // Show documentation's last contributor's name.
    enableUpdateBy: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    scrollToTop: true,
    scrollToTopOptions: {
        zIndex: 100,
    },

    usePrism: ['jsx', 'typescript'],

    gaTrackingId: 'UA-139149146-1',

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/andycall/RCRE',
};

module.exports = siteConfig;
