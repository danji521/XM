<template>
	<div class="position">
		<Header>
			<Row>
				<Col :sm="24" :lg="12" class="left">
				<img src="../assets/img/home_07.jpg" alt="">
				<span>北京站</span>
				</Col>
				<Col :sm="24" :lg="12">
				<ul>
					<li :class="{active:shows==1}" @click="show1()">首页</li>
					<li :class="{active:shows==2}" @click="show2()">找职位</li>
					<li :class="{active:shows==3}" @click="show3()">找精英</li>
					<li :class="{active:shows==4}" @click="show4()">关于我们</li>
				</ul>
				</Col>
			</Row>

		</Header>
		<Content>
			你好
		</Content>
		<Footer>
			<bottom></bottom>
		</Footer>
	</div>
</template>

<script>
	// 底部组件
	import bottom from '../components/bottom.vue'

	export default {
		name: 'position',
		data() {
			return {
				// 头部导航  样式  首页    找职位
				shows: 2,
			}
		},
		components: {
			"bottom": bottom
		},
		created() {},
		methods: {
			// 头部 首页 找职位 样式切换
			show1() {
				this.shows = 1;
				this.$router.push('/')
			},
			show2() {
				this.shows = 2;
				// this.$router.push('/position')
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
	// 头部
	.ivu-layout-header {
		background: #ffffff;
		padding: 1rem 16%;
		padding-bottom: 0;
		height: auto;
		line-height: auto;
		font-size: .9rem;

		img {
			width: 15rem;
			height: 2rem;
		}

		span {
			margin-left: 1rem;
		}

		ul,
		li {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			outline: none;
		}

		li {
			padding: 0 .45rem;
			border-bottom: 2px solid #ffffff;
		}

		.active {
			color: #eb5255;
			border-bottom: 2px solid #eb5255;
		}

		.left {
			display: flex;
			align-items: center;
		}
	}

	@media (max-width: 992px) {
		.ivu-layout-header {
			padding: 0 3%;
		}
	}

	// 底部
	.ivu-layout-footer {
		padding: 0;
		width: 100%;
		// position: absolute;
		// bottom: 0;
	}
</style>
