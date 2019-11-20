<template>
	<Footer>

		<Row class="h1">
			<Col :sm="24" :lg="8" class="left">
			<p>关于我们</p>
			<p>萝卜多--知根知底的社群招聘</p>
			</Col>
			<Col :sm="24" :lg="8" class="center">
			<p>联系我们</p>
			<p><img src="../assets/img/home_80.jpg" alt="">联系电话:(010)5834855</p>
			<p><img src="../assets/img/home_83.jpg" alt="">邮箱联系:11833837@aa.com</p>
			<p> <img src="../assets/img/home_88.jpg" alt=""> 地址：北京海淀区猥獕留1025是 </p>
			</Col>
			<Col :sm="24" :lg="8" class="right">
			<img src="../assets/img/home_77.jpg" alt="">
			<p>微信号：wienx</p>
			</Col>
		</Row>
		<Row class="h2">
			<Col :sm="24" :lg="24">
			<p>Copyright © 2015 北京葡萄藤信息技术有限公司 All Rights Reserved | 京ICP备15035574号-1</p>
			</Col>
		</Row>
	</Footer>
</template>

<script>
	export default {
		name: 'bottom',
		data() {
			return {
				// 头部导航  样式  首页    找职位
				shows: 1,
			}
		},
		methods: {
			// 头部 首页 找职位 样式切换
			show1() {
				this.shows = 1;
				this.$router.push('/')
			},
			show2() {
				this.shows = 2;

				this.$router.push('/position')
			},
			show3() {
				this.shows = 3
			},
			show4() {
				this.shows = 4
			}
		}
	}
</script>

<style scoped lang="scss">
	// 底部
	.ivu-layout-footer {
		padding: 0;
		
		.h1 {
			color: #cccccc;
			padding: 1rem 16%;
			font-size: .8rem;
			background-color: #ffffff;
	
			p {
				margin-bottom: .6rem;
			}
	
			.left {
				text-align: left;
			}
	
			.center {
				text-align: left;
				padding-left: 3%;
	
				p {
					display: flex;
					align-items: center;
				}
			}
	
			.right {
				padding-top: 4vh;
				text-align: right;
			}
		}
	
		.h2 {
			font-size: .6rem;
			background-color: #37485a;
		}
	
		@media (max-width: 992px) {
	
			.left,
			.center,
			.right {
				text-align: center !important;
			}
		}
	}
</style>
