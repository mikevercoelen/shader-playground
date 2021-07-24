module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)

  const styledComponentsOptions = api.env('production') ? {
    ssr: false,
    displayName: false,
    fileName: false,
    minify: true,
    pure: true
  } : {
    ssr: false,
    displayName: true,
    fileName: true,
    minify: false,
    pure: false
  }

  const plugins = [
    '@babel/plugin-proposal-export-default-from',
    ['styled-components', styledComponentsOptions]
  ]

  if (!api.env('production')) {
    plugins.push('react-refresh/babel')
  }

  return {
    presets: [
      '@babel/env',
      '@babel/react'
    ],
    plugins
  }
}
