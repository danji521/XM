<template>
	<div class="home">
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
			<!-- 导航图 -->
			<Row class="nav">
				<Col span="24">
				<img src="../assets/img/home_11.png" alt="">
				</Col>
			</Row>
			<!-- 简介-->
			<Row class="introduce">
				<Col :sm="24" :lg="6">
				<img src="../assets/img/home_15.jpg" alt="">
				<h5>超短相应时间</h5>
				<p>48小时高效推荐</p>
				</Col>
				<Col :sm="24" :lg="6">
				<img src="../assets/img/home_17.jpg" alt="">
				<h5>行业1/3的价格</h5>
				<p>成功推荐仅收费1月工资</p>
				</Col>
				<Col :sm="24" :lg="6">
				<img src="../assets/img/home_20.jpg" alt="">
				<h5>三维的人才评测</h5>
				<p>技术人事背景三维评定</p>
				</Col>
				<Col :sm="24" :lg="6" class="border">
				<h6>500+</h6>
				<p><span>人才入职</span></p>
				<h6>498人</h6>
				<p><span>成功转正</span></p>
				<h6>98%</h6>
				<p><span>成功率</span></p>
				</Col>
			</Row>
			<!-- 最新职位-->
			<Row class="position">
				<Col span="24" class="h1">
				最<span>新职</span>位
				<p>NEW POSITION</p>
				</Col>
				<Col span="24" class="h2">更多 ></Col>
				<Col span="24">
				<Carousel v-model="value1" dots='none' arrow='always' autoplay loop>
					<CarouselItem v-for="(item,index) in position">
						<div class="demo-carousel">
							<Col :sm="24" :lg="5" v-for="item in position[index]">
							<div class="hgith">
								<img :src="item.logo" alt="">
							</div>
							<p>{{item.name}}</p>
							<p>{{item.companyName}}</p>
							</Col>
						</div>
					</CarouselItem>
				</Carousel>
				</Col>
			</Row>
			<!-- 服务流程-->
			<Row class="process">
				<Col span="24" class="h1">
				服<span>务流</span>程
				<p>SERVICEFLOW</p>
				</Col>
				<!-- 第一行 -->
				<Row>
					<Col :sm="24" :lg="6">
					<img :src="processimg[0]" alt="">
					<p>1.{{processurl[0]}}</p>
					</Col>
					<Col :sm="24" :lg="3">
					<img src="../assets/img/home_45.jpg" alt="">
					</Col>
					<Col :sm="24" :lg="6"><img :src="processimg[1]" alt="">
					<p>2.{{processurl[1]}}</p>
					</Col>
					<Col :sm="24" :lg="3"><img src="../assets/img/home_45.jpg" alt=""></Col>
					<Col :sm="24" :lg="6"><img :src="processimg[2]" alt="">
					<p>3.{{processurl[2]}}</p>
					</Col>
				</Row>
				<!-- 第二行 -->
				<Row>
					<Col :sm="24" :lg="6">
					<img :src="processimg[3]" alt="">
					<p>4.{{processurl[3]}}</p>
					</Col>
					<Col :sm="24" :lg="3">
					<img src="../assets/img/home_45.jpg" alt="">
					</Col>
					<Col :sm="24" :lg="6"><img :src="processimg[4]" alt="">
					<p>5.{{processurl[4]}}</p>
					</Col>
					<Col :sm="24" :lg="3"><img src="../assets/img/home_45.jpg" alt=""></Col>
					<Col :sm="24" :lg="6"><img :src="processimg[5]" alt="">
					<p>6.{{processurl[5]}}</p>
					</Col>
				</Row>
			</Row>
			<!-- 伙伴之言-->
			<Row class="position Partn">
				<Col span="24" class="h1">
				伙<span>伴之</span>言
				<p>PARTNERADVICE</p>
				</Col>
				<Col span="24">
				<Carousel v-model="value1" dots='none' arrow='always' autoplay loop>
					<CarouselItem v-for="(item,index) in position">
						<div class="demo-carousel">
							<Col :sm="24" :lg="5" v-for="item in position[index]">
							<div class="hgith">
								<img :src="item.logo" alt="">
							</div>
							<p>{{item.name}}</p>
							<p>{{item.companyName}}</p>
							<p>{{item.companyName}}</p>
							</Col>
						</div>
					</CarouselItem>
				</Carousel>
				</Col>
			</Row>
		</Content>
		<Footer>
			<bottom></bottom>
			<!-- <Row class="h1">
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
			</Row> -->
		</Footer>
	</div>
</template>

<script>
	//  头部
	import bottom from '../components/bottom.vue';
	export default {
		name: 'home',
		data() {
			return {
				// 头部导航  样式  首页    找职位
				shows: 1,
				// 最新职位
				value1: 0,
				// 最新职位页数
				position: [],
				// 服务流程
				processimg: [],
				processurl: [],
				value5: 0,
				// 伙伴之言
				Partner: []

			}
		},
		components: {
			"bottom": bottom,
		},
		created() {
			// 最新职位
			axios.get('/api/a/profession/search')
				.then(function(response) {
					// 
					console.log(response.data);

					function group(array, subGroupLength) {
						let index = 0;
						let newArray = [];
						while (index < array.length) {
							newArray.push(array.slice(index, index += subGroupLength));
						}
						return newArray;
					}
					var Array = response.data.data;
					var groupedArray = group(Array, 4);
					// 页数
					this.position = groupedArray;

				}.bind(this))

			// 服务流程
			axios.get('/api/a/article/search')
				.then(function(response) {
					console.log(response.data.data.articleList);
					for (var i = 0; i < 6; i++) {

						this.processimg.push(response.data.data.articleList[i].img);
						this.processurl.push(response.data.data.articleList[i].url);
					}
					this.process = response.data.data.articleList;
				}.bind(this))


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

	// 导航
	.nav img {
		width: inherit;
	}

	// 简介
	.introduce {
		padding: 0 16%;
		margin: 3.2rem 0;

		img {
			margin-bottom: .5rem;
		}

		p {
			color: #63859f;
			font-size: .7rem;
			margin-bottom: .5rem;
		}

		span {

			color: #22415d;
			font-size: .7rem;
		}

		h5 {
			color: #22415d;
			font-size: .8rem;
		}

		h6 {
			margin-bottom: .3rem;
			font-size: .8rem;
			color: #fc2e54;
		}

		.border {
			border-left: 1px solid #e5e9eb;
		}

		@media (max-width: 992px) {
			.border {
				border: 0;
			}

			div {
				padding: 1rem 0;
			}
		}
	}

	// 最新职位
	.position {
		padding: 0 16%;
		background-color: #f6f7f8;

		img {
			width: 9rem;
		}

		span {
			padding: .2rem 0;
			border-bottom: 2px solid #f1706b;
		}

		p {
			padding: .2rem 0;
			font-size: .8rem;
			color: #456e8d;
		}



		.h1 {
			font-size: 1rem;
			color: #22415d;
			padding: 3.9rem 0 1.8rem 0;
		}

		.h2 {
			font-size: .8rem;
			color: #456e8d;
			text-align: right;
			margin-bottom: .3rem;
		}

		.hgith {
			height: 9.2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.ivu-col.ivu-col-span-sm-24.ivu-col-span-lg-5 {
			background-color: #ffffff;
			height: 13rem;
			margin-left: 4%;
			margin-bottom: 3.8rem;

			p:nth-child(2) {
				border-top: 1px solid #e5e9eb;
			}
		}

		.ivu-carousel /deep/.ivu-carousel-arrow.left {
			left: -2.5rem;
			width: 1.9rem;
			height: 2.2rem;
			border-radius: 0;
			background-image: url(../assets/img/home_33.jpg);

			.ivu-icon {
				display: none;
			}
		}

		.ivu-carousel /deep/.ivu-carousel-arrow.right {
			right: -2.5rem;
			width: 1.9rem;
			height: 2.2rem;
			border-radius: 0;
			background-image: url(../assets/img/home_36.png);

			.ivu-icon {
				display: none;
			}
		}
	}

	@media (max-width: 992px) {
		.ivu-col.ivu-col-span-sm-24.ivu-col-span-lg-5 {
			margin: 5% 0;
			margin-bottom: 0 !important;
		}

		.position {
			padding-bottom: 1rem;
		}
	}

	//服务流程 
	.process {
		padding: 0 16%;

		span {
			padding: .2rem 0;
			border-bottom: 2px solid #f1706b;
		}

		p {
			padding: .2rem 0;
			font-size: .8rem;
			color: #456e8d;
		}

		.h1 {
			font-size: 1rem;
			color: #22415d;
			padding: 3.7rem 0 2.4rem 0;
		}

		.ivu-col-span-lg-6 {
			img {
				width: 100%;
				height: 7rem;
			}
		}

		.ivu-col-span-lg-3 {
			height: 100%;

			img {
				width: 100%;
			}
		}

		@media (max-width: 992px) {
			.ivu-col-span-lg-6 {
				img {
					width: 16rem;
					height: 12.5rem;
				}
			}

			.ivu-col-span-lg-3 {
				display: none;
			}
		}
	}

	// 伙伴之言
	.Partn {
		.ivu-col.ivu-col-span-sm-24.ivu-col-span-lg-5 {
			height: 16rem;

			p {
				font-size: .1rem;
			}
		}
	}

	// 底部
	.ivu-layout-footer {
		padding: 0;
		width: 100%;
	}
</style>
