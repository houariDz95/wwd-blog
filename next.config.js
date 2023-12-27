/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    images: {
        domains: ['static.shareasale.com']
    },
    compiler:{
        removeConsole: true,
    },
};

module.exports = withContentlayer({ ...nextConfig });
