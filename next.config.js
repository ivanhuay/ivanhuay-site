const path = require('path');

module.exports = {
    webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, 'node_modules/nejo-json-viewer')],
            use: [defaultLoaders.babel],
        });

        return config;
    },
    transpilePackages: ['nejo-json-viewer'],
};
