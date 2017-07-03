const ENV = process.env.NODE_ENV || 'development'

module.exports = ({ config }, {
  sourceMap
} = {}) => {
  if (sourceMap !== false) {
    if (typeof sourceMap === 'string') {
      config.devtool(sourceMap)
    } else {
      sourceMap = ENV === 'production' ?
        'source-map' :
        ENV === 'test' ?
        'inline-source-map' :
        'eval-source-map'
      config.devtool(sourceMap)
    }
  }
}
