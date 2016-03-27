# vue-jwt-vueRouter-vueResource
使用vue component的方式实现的单页需登录认证app，认证方式直接使用了auth0提供的nodejs jwt认证模块[nodejs-jwt-authentication-sample](https://github.com/auth0/nodejs-jwt-authentication-sample)，页面切换采用了vue-router，和服务器端的通信认证使用了vue-resource。

##使用方法

1、安装认证模块（server文件夹）需要使用的依赖：

	cd ./server
	npm install

2、认证模块依赖安装成功后，回到主目录安装项目依赖：

	cd ..
	npm install

3、启动node服务器：

	node ./server/server.js

成功启动后服务器会监听在`http://localhost:3001`

4、打开另一个终端，运行项目开发配置：

	npm run dev

运行成功后，打开浏览器，进入`http://localhost:8080`即可查看项目文件（因为第一次需要加载热加载模块，第一次打开速度会比较慢）。

##预览

![](http://i.imgur.com/ZDn8ViI.png)

![](http://i.imgur.com/Cvqzq4V.png)

![](http://i.imgur.com/xahfcmD.png)