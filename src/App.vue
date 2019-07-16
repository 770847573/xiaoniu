<template>
	<div id="app">
    <!--头部组件-->
		<!--<my-header></my-header>-->
		<!--轮播图控件-->
		<!--<div class="block">

			<el-carousel trigger="click" height="900px">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3 class="small"></h3>
				</el-carousel-item>
			</el-carousel>
		</div>-->
		<router-view/>
		<!--<my-search></my-search>-->
		<!--地点输入框-->
	</div>
</template>

<script>
</script>

<!--<style lang="scss">
	* {
		padding: 0;
		margin: 0;
	}
	/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
	/*轮播图*/
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(5) {
		background: url('./img/20,0,71,11041,1600,700,7e73547f.jpg') no-repeat;
		background-size: cover;
		background-size: 100% 100%;
		/*background-color: blue;*/
	}
	
	.el-carousel__item:nth-child(6) {
		/*background-color: black;*/
		background: url('./img/20,0,50,11093,1600,700,b23f4fa8.jpg') no-repeat;
		background-size: cover;
		background-size: 100% 100%;
		
	}
	
	.el-carousel__item:nth-child(3) {
		/*background-color: green;*/
		background: url('./img/20,0,80,11211,1600,700,af13be52.jpg') no-repeat;
		background-size: cover;
		background-size: 100% 100%;
		
	}
	
	.el-carousel__item:nth-child(4) {
		/*background-color: red;*/
		background: url('./img/20,0,52,11185,1600,700,fe917123.jpg') no-repeat;
		background-size: cover;
		background-size: 100% 100%;
		
	}
	
</style>-->