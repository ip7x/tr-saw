const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/tr-saw' : '',
  assetPrefix: isProd ? '/tr-saw/' : '',
};
