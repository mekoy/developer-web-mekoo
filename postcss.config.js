//permettre de préfixer automatiquement votre code CSS pour tous les navigateurs.
module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          browsers: 'last 2 versions',
        },
        cssnano: {},
    },
}