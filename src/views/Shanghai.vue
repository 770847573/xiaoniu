<template>
	<div id="shanghai">
		<my-shcondition @condition='mycondition'></my-shcondition>
		<div class="pic">

			<ul class="pic_list">
				<!--<el-row :gutter="20">
			<el-col :span='6'><div class="grid-content ">-->
				<li v-for="h in homestay">
					<img :src='h.Img' style="width: 420px;height: 280px;">
					<div class="bottom">
						<div>
							<span class="bottom_price">
							￥<i>{{h.Price}}</i>起/晚
						</span>
							<el-button round class='order'>立即预定</el-button>
						</div>
						<div class="bottom_information">
							<span class="bottom_title">
							{{h.Homename}}
						</span>
							<br />
							<em>
							{{h.Type}}/{{h.Housestyle}}/宜住{{h.Number}}人
						</em>
						</div>
					</div>

				</li>
				<!--</div>
			
			</el-col>
			</el-row>-->
			</ul>

		</div>

	</div>

</template>

<script>
	export default {
		created: function() {
			console.log(this.$route.params)
		},
		
		data() {
			return {
				homestay: this.$route.params.data

			}
		},
		methods:{
			mycondition(value){
				this.homestay= value;
			}
		}
	}
</script>

<style scoped="scoped">
	.pic {
		margin-top: 20px;
		width: 100%;
		padding-left: 70px;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
		display: inline-block;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	.pic_list {
		padding-left: 12px;
	}
	
	.pic_list li {
		float: left;
		list-style: none;
		width: 22%;
		padding-right: 12px;
		margin-bottom: 89px;
		margin-right: 20px;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
	}
	
	.bottom {
		position: absolute;
		bottom: -40px;
		left: 0;
		width: 100%;
	}
	
	.bottom_price {
		height: 48px;
		line-height: 48px;
		display: inline-block;
		padding: 0 8px 0 8px;
		background-color: #000;
		filter: alpha(opacity=80);
		-moz-opacity: 0.8;
		opacity: 0.8;
		font-size: 18px;
		color: #fff;
		/*float: left;*/
		text-align: center;
	}
	
	.order {
		position: absolute;
		top: 0px;
		right: 0px;
	}
</style>