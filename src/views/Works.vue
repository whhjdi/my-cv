<template>
	<div class="works-wrapper">
		<h2>作品集</h2>
		<p>不知不觉写了好多前端的东西了，把自己觉得完成度比较高的项目放在这里收藏起来</p>
		<div class="works">
			<div class="item" v-for="(item, index) in list" :key="index">
				<div class="top" :class="[item.color]">
					<h3>{{ item.name }}</h3>
				</div>
				<div class="desc">
					<h3>{{ item.title }}</h3>
					<h4>详情：</h4>
					<ul>
						<li v-for="(des, index) in item.desc" :key="index">{{ des }}</li>
					</ul>
				</div>
				<div class="bottom" :style="{ backgroundImage: 'url(' + item.pic + ')' }"></div>
				<div class="home-button">
					<a :href="item.url" class="btn">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-star"></use>
						</svg>
						源码
					</a>
					<a :href="item.preview" class="btn">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiangbei-"></use>
						</svg>
						预览
					</a>
				</div>
			</div>
			<div class="item">
				<div class="top" :class="extra.color">
					<h3>{{ extra.name }}</h3>
				</div>
				<div class="desc">
					<h3>其他项目和Demo的集合</h3>
					<ul>
						<li v-for="item in extra.desc" :key="item.name">
							<a :href="item.url">{{ item.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "profile",
		data: function() {
			return {
				extra: {
					name: "其他",
					url: "https://github.com/whhjdi",
					color: "yellow",
					preview: "https://github.com/whhjdi",
					title: "其他项目和Demo的集合",
					desc: [
						{
							name: "简书（react）",
							url: "https://github.com/whhjdi/jianshu-react"
						},
						{
							name: "CNode社区（vue）",
							url: "https://github.com/whhjdi/vue-cnode"
						},
						{
							name: "个人网站（vue）",
							url: "https://github.com/whhjdi/my-cv"
						},
						{
							name: "可爱的喵",
							url: "https://github.com/whhjdi/make-a-miao"
						}
					]
				},
				list: [
					{
						name: "React常用组件",
						url: "https://github.com/whhjdi/react-ts",
						color: "black",
						preview: "http://whhjdi.xyz/react-ts/index.html#/",
						pic:
							"https://ws3.sinaimg.cn/large/006tNc79ly1g1v4uh0urdj31350u07a6.jpg",
						title: "这是一个使用React和TypeScript编写的组件库",
						desc: [
							"使用React和TypeScript,实现了Button, Layout, Grid, Pagination, Slides, Progress等基础组件"
						]
					},
					{
						name: "CNode社区（Taro）",
						url: "https://github.com/whhjdi/CNode-taro",
						color: "black",
						preview: "https://whhjdi.xyz/CNode-taro/dist",
						pic:
							"https://ws1.sinaimg.cn/large/006tNc79ly1g1v4mxgbx1j30us0m8qfj.jpg",
						title:
							"这是一个使用Taro编写的CNode社区，实现一次编码多端使用，兼容h5和小程序",
						desc: ["使用Taro,TypeScript和Redux编写的CNode社区"]
					},
					{
						name: "沐雪MUSIC",
						url: "https://github.com/whhjdi/musicByMuxue",
						color: "black",
						preview: "https://whhjdi.xyz/musicByMuxue",
						pic:
							"https://ws1.sinaimg.cn/large/006tNbRwly1fyd3cmqyhwj315y0u0hdu.jpg",
						title:
							"这是一个网页版的音乐播放器，十几个页面设计实现大部分必须的功能，好看又好用",
						desc: [
							"使用vue-cli3脚手架构建项目,使用vw实现移动端适配",
							"使用better-scroll实现滚动和轮播，使用vue-lazyload进行图片懒加载，使用lyric-parser进行歌词解析",
							"使用阿里图标库(icon-font),精心挑选好看的icon",
							"使用网易云音乐的api实现登录功能，以及基于登录的歌曲推荐和歌单推荐以及签到等功能，出于安全性和稳定性考虑，收藏夹等功能只能在本地使用"
						]
					},
					{
						name: "沐雪商城",
						url: "https://github.com/whhjdi/shop-vue",
						color: "default",
						preview: "https://whhjdi.xyz/shop-vue/dist",
						pic: "https://i.loli.net/2019/01/11/5c3879c17984a.png",
						title: "这是用于移动端的商城，通过mock数据实现模拟商城的实际流程",
						desc: [
							"使用vue-cli3脚手架构建项目,使用ren实现移动端适配",
							"使用vant部分实用的组件",
							"使用easy-mock（支持https）作为接口",
							"实现登录注册，分类，购物车，订单支付，地址管理等主要功能"
						]
					},
					{
						name: "在线简历编辑器",
						url: "https://github.com/whhjdi/vue-resumeEdit",
						color: "purple",
						preview: "https://whhjdi.xyz/vue-resumeEdit/dist/#/",
						pic: require("../assets/resume.jpg"),
						title: "这是一个在线简历编辑器，可以让你方便快捷的构建自己简历",
						desc: [
							"使用vue-cli脚手架构建项目,使用vue-router,ES6,Scss",
							"使用Element-ui的部分组件和功能美化页面和前端表单验证",
							"使用阿里图标库(icon-font),使用vue-particles展现背景动态效果",
							"使用LeanCloud作为后台数据库,实现登陆,注册以及用户信息的保存"
						]
					},
					{
						name: "自用Vue组件",
						url: "https://github.com/whhjdi/ZUI",
						color: "red",
						preview: "https://whhjdi.xyz/ZUI/dist/#/",
						pic: require("../assets/myui.png"),
						title:
							"这是一个简单的Vue组件的集合，初步实现了tabs,toast,button,input等基础组件，并用在了自己的网站上。",
						desc: [
							"使用vue-cli3脚手架构建项目,这个项目让我了解了Vue的更多特性，加深了对ES6的理解。",
							"添加6种主题色，简洁却不单调，清新有活力。",
							"细小的动画在不经意间体现细节之美。",
							"借鉴参考ElementUI，iView等框架的实现，感谢他们，更多组件持续更新ing。"
						]
					},
					{
						name: "视频解析",
						url: "https://github.com/whhjdi/video-parse",
						color: "green",
						preview: "http://whhjdi.xyz/video-parse/dist/#/",
						pic: "https://i.loli.net/2019/01/10/5c36c906878ec.jpg",
						title:
							"这是一个可以播放vip视频的网站，接口全部来自互联网，本站不提供解析接口，仅供学习交流",
						desc: [
							"搜集互联网的某些接口，实现视频解析播放等功能",
							"添加当地天气，日期，时间展示",
							"居家旅行必备佳品，是你追剧的好帮手"
						]
					},
					{
						name: "涂鸦画板",
						url: "https://github.com/whhjdi/canvas-demo",
						preview: "https://whhjdi.xyz/canvas-demo/",
						color: "purple",
						pic: require("../assets/canvas.png"),
						title: "这是一个用Canvas实现的画板，功能丰富，超好的用户体验。",
						desc: [
							"本项目使用HTMl5的input新增color类型实现了自定义背景色和画笔颜色。",
							"使用Canvas和JS实现了笔刷选择橡皮擦以及保存清空等功能。",
							"由于某些原因移动端兼容不好，很遗憾。"
						]
					},
					{
						name: "键盘导航",
						url: "https://github.com/whhjdi/nav-demo",
						color: "default",
						preview: "https://whhjdi.xyz/nav-demo/index.html",
						pic: require("../assets/nav1.png"),
						title:
							"这是一个在线导航，把url和按键绑定，个人最喜欢的，虽然简单但是真的喜欢。",
						desc: [
							"使用原生JS实现，通过事件绑定实现基本的功能。",
							"使用LocalStorage存储背景信息，实现换肤功能。"
						]
					},
					{
						name: "豆瓣搜索",
						url: "https://github.com/whhjdi/douban-demo",
						color: "green",
						preview: "https://whhjdi.xyz/douban-demo/",
						pic: require("../assets/douban.png"),
						title:
							"这是一个使用豆瓣API实现的搜索项目，样式没设计好，不太好看，但基本功能没问题。",
						desc: [
							"本项目使用jQuery和BootStrape实现基本的功能和样式。",
							"使用豆瓣开放API，Ajax请求数据，渲染并展示搜索结果。",
							"不但可以搜电影，还可以搜音乐和图书，使用flex布局,兼容pc和移动端。"
						]
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
	@import "../components/z.scss";
	.works-wrapper {
		margin-top: 80px;
		padding: 50px 20px;
		background: #fdd0ad;
		> h2 {
			margin: 10px 0;
		}
		.works {
			margin-top: 30px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.item {
				width: 500px;
				position: relative;
				margin-bottom: 40px;
				overflow: hidden;
				border-radius: 10px;
				&:last-child {
					height: 450px;
					.desc {
						a {
							display: block;
							margin: 10px;
							color: inherit;
							font-weight: bold;
							&:hover {
								color: #ff5a79;
							}
						}
					}
				}
				&:hover {
					box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
					.home-button {
						background: #d8e3e7;
					}
				}
				.top {
					/* background: #ff7381; */
					height: 80px;
					padding: 22px;
					color: #fff;
				}
				.desc {
					background: #d8e3e7;
					width: 100%;
					min-height: 370px;
					padding: 30px;
					text-align: left;
					& > h3 {
						margin: 10px;
					}
					& > ul {
						padding: 1em 2em;
					}
				}
				.bottom {
					position: absolute;
					top: 80px;
					left: 0;
					right: 0;
					/* background: url("../assets/resume.jpg"); */
					background-repeat: no-repeat;
					background-size: 100%;
					transition: all 0.3s;
					width: 100%;
					min-height: 370px;
					display: inline-block;
					background-position: 50% 50%;
					@media (max-width: 600px) {
						&.bottom {
							background: #000 !important;
							opacity: 0.8;
							height: 100%;
						}
					}
					&:hover {
						background-size: 110%;
						opacity: 0;
					}
				}
				.home-button {
					display: block;
					padding: 1em 0;
					transition: all 0.5s ease-in-out;
					font-size: 14px;
					.btn {
						display: inline-block;
						cursor: pointer;
						border-radius: 4px;
						font-weight: 600;
						padding: 0.5em 1em;
						transition: none;
						margin: 0.25em 10px;
						background: #ff5a79;
						color: #fff;
						box-shadow: 0 3px #f3002e;
						position: relative;
						&:hover {
							top: 2px;
							box-shadow: 0 2px #f3002e;
						}
						.icon {
							margin-right: 2px;
						}
					}
				}
			}
			@media (max-width: 768px) {
				.item {
					width: 90%;
				}
			}
		}
	}
</style>
