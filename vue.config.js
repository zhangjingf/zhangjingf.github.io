module.exports = {
  lintOnSave: true,
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  pages: {
    blog: {
      entry: 'src/views/blog/main.js',
      template: 'public/index.html',
      filename: 'blog.html'
    },
    express: {
      entry: 'src/views/express/main.js',
      template: 'public/index.html',
      filename: 'express.html'
    }
  }
};
