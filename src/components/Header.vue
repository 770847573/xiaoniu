<template>
	<div class="header">
			<div class="header_con">
				<a href="http://localhost:8080" class="logo_index">小猪</a>
				<span class="header_text">
  				酒店之外，就住小牛
  			</span>
				<el-menu :default-active="activeIndex" text-color="white" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color='transparent'>
					<el-menu-item index="1"><router-link to='./liti'>注册</router-link></el-menu-item>
					<el-menu-item index="2">登录</el-menu-item>
					<el-menu-item index="3" >消息中心</el-menu-item>
					<el-menu-item index="4">
						<a href="https://www.ele.me" target="_blank">订单管理</a>
					</el-menu-item>
				</el-menu>
			</div>
		</div>
</template>

<script>
	export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped="scoped">
	.header {
		position: absolute;
		width: 100%;
		top: 0;
		z-index: 99;
		background: #000000;
		background: -webkit-gradient(linear, 0 0, 0 bottom, from(#000000), to(transparent));
		background: -webkit-linear-gradient(#000000, transparent);
		background: -moz-linear-gradient(#000000, transparent);
		background: -ms-linear-gradient(#000000, transparent);
		background: -o-linear-gradient(#000000, transparent);
		background: linear-gradient(#000000, transparent);
		-pie-background: linear-gradient(#000000, transparent);
	}
	
	.header_con {
		height: 100px;
		padding: 31px 20px 0;
	}
	
	.header_text {
		color: white;
		font-family: "微软雅黑";
		font-size: 22px;
		display: inline-block;
		margin-top: 16px;
		margin-left: 0;
	}
	
	.logo_index {
		width: 140px;
		height: 80px;
		text-indent: -9999px;
		display: block;
		float: left;
		background: url('../img/牛.svg') no-repeat;
		background-size: 140px 80px;
	}
	
	.el-menu-demo{
		width: 500px;
		float: right;
		
	}
</style>