// vue.config.js
module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://www.luoboduo.com', //对应自己的接口
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
