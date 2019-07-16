<template>
	<div class="con_box">
		<div class="con_box_l">
			<div class="type">
				<h6 class="type_title">出租类型</h6>
				<el-checkbox-group v-model="checkboxGroup1">
					<el-checkbox-button v-for="type in types" :label="type" :key="type" style='width: 25%;' class='type_btn'>{{type}}</el-checkbox-button>
				</el-checkbox-group>
			</div>
			<div class="type">
				<h6 class="type_title">居住人数</h6>
				<el-select v-model="value" clearable placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label" style='width: 75%;'>
					</el-option>
				</el-select>
			</div>
			<div class="type keytype">
				<h6 class="type_title">关键词</h6>
				<el-input placeholder="请输入内容" v-model="keyinput" clearable>
				</el-input>
			</div>
		</div>
		<div class="con_box_r">
			<div class="type">
				<span class="demonstration type_title">入住离开日期</span>
				<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</div>
			<div class="type">
				<h6 class="type_title type_title_location">位置</h6>
				<el-radio-group v-model="qlocation">
					<el-radio :label="1">朝阳</el-radio>
					<el-radio :label="2">海淀</el-radio>
					<el-radio :label="3">丰台</el-radio>
					<el-radio :label="4">东城</el-radio>
					<el-radio :label="5">西城</el-radio>
					<el-radio :label="6">通州</el-radio>
					<el-radio :label="7">昌平</el-radio>
					<el-radio :label="8">延庆</el-radio>
					<el-radio :label="9">大兴</el-radio>
					<el-radio :label="10">密云</el-radio>
					<el-radio :label="11">怀桑</el-radio>
					<el-radio :label="12">房山</el-radio>
					<el-radio :label="13">顺义</el-radio>
					<el-radio :label="14">石景山</el-radio>
					<el-radio :label="15">门头沟</el-radio>
					<el-radio :label="16">平谷</el-radio>
				</el-radio-group>
			</div>

			<div class="type">
				<h6 class="type_title type_title_housestyle">户型</h6>
				<el-radio-group v-model="housestyle">
					<el-radio :label="1">一居</el-radio>
					<el-radio :label="2">二居</el-radio>
					<el-radio :label="3">三居</el-radio>
					<el-radio :label="4">四居</el-radio>
					<el-radio :label="5">其他</el-radio>
					
					
					
					

				</el-radio-group>
			</div>
		</div>
		<div class="claerfloat"></div>
	</div>
</template>

<script>
	const typeOptions = ['整租', '单间', '合住'];
	export default {
		data() {
			return {
				checkboxGroup1: [],
                homenum:["一居","二居",'三居','四居','其他'],
                locationnum:['朝阳','海淀','丰台','东城','西城','通州','昌平','延庆','大兴','密云','怀桑','房山','顺义','石景山','门头沟','平谷'],
				types: typeOptions,
				options: [{
					value: '选项1',
					label: '1'
				}, {
					value: '选项2',
					label: '2'
				}, {
					value: '选项3',
					label: '3'
				}, {
					value: '选项4',
					label: '4'
				}, {
					value: '选项5',
					label: '5'
				}, {
					value: '选项6',
					label: '6'
				}, {
					value: '选项7',
					label: '7'
				}, {
					value: '选项8',
					label: '8'
				}, {
					value: '选项9',
					label: '9'
				}, {
					value: '选项10',
					label: '10'
				}],
				value: '',
				keyinput: '',
				value1: '',
				value2: '',
				qlocation: '',
				housestyle: "",
				keepcondition :''
               
			};
		},
		watch: {
			keyinput(){
				this.$emit('condition',this.$store.state.infoList.filter(item =>{
					if(item.Homename.indexOf(this.keyinput)>=0){
						return true;
					}if(item.City.indexOf(this.keyinput)>=0){
						return true;
					}if(item.Keyword.indexOf(this.keyinput)>=0){
						return true;
					}if(item.Type.indexOf(this.keyinput)>=0){
						
						return true;
					}if(item.Housestyle.indexOf(this.keyinput)>=0){
						return true;
					}
				}))
			},
			value() {

				this.procondition();
			},
			checkboxGroup1() {
				//				var keep = [];
				//				for(var i = 0; i < this.checkboxGroup1.length; i++) {
				//					this.$store.state.infoList.filter(item => {
				//
				//						return item.Type == this.checkboxGroup1[i]
				//					});
				//					keep = keep.concat(this.$store.state.infoList.filter(item => {
				//
				//						return item.Type == this.checkboxGroup1[i]
				//					}))
				//
				//					console.log(keep)
				//
				//				}
				//				this.$emit('condition', keep)
				this.procondition();
			},
			qlocation() {
				this.procondition();
			},
			housestyle() {
				this.procondition();
			}
		},
		methods: {
			procondition() {


				if(this.value) {
					console.log('有人数的条件')
					if(this.keepcondition.length>0) {
						console.log('之前有其他条件')
						this.$emit('condition', this.keepcondition.filter(item => {
							return item.Number >= parseInt(this.value)
						}));
						this.keepcondition = this.keepcondition.filter(item => {
							return item.Number >= parseInt(this.value)
						})
					} else {
						console.log('之前没有其他条件');
						this.$emit('condition', this.$store.state.infoList.filter(item => {
							
							return item.Number >= parseInt(this.value)
						}));
		this.keepcondition = this.$store.state.infoList.filter(item => {
							return item.Number >= parseInt(this.value)
						})
						console.log(this.keepcondition)
					}

				} if(this.checkboxGroup1.length>0) {
					console.log('有出租类型的条件')
					var keep = [];
					
					if(this.keepcondition.length>0) {
						console.log('之前有其他条件')
						for(var i = 0; i < this.checkboxGroup1.length; i++) {
			this.keepcondition.filter(item => {
								return item.Type == this.checkboxGroup1[i]
							});
							keep = keep.concat(this.keepcondition.filter(item => {
								return item.Type == this.checkboxGroup1[i]
							}))
							console.log(keep)
            
						}
		this.keepcondition = keep;
						this.$emit('condition', keep)
					} else {
						console.log('之前没有其他条件');
						
						for(var i = 0; i < this.checkboxGroup1.length; i++) {
							this.$store.state.infoList.filter(item => {
								return item.Type == this.checkboxGroup1[i]
							});
							keep = keep.concat(this.$store.state.infoList.filter(item => {
								return item.Type == this.checkboxGroup1[i]
							}))
							console.log(keep)
						}
		this.keepcondition = keep;
						this.$emit('condition', keep)
					}
			

				}if(this.qlocation){
					console.log('有位置的条件')
					if(this.keepcondition.length>0) {
						console.log('之前有其他条件')
						this.$emit('condition', this.keepcondition.filter(item => {
							return item.Keyword.indexOf(this.locationnum[this.qlocation-1])
						}));
		this.keepcondition = this.keepcondition.filter(item => {
							return item.Keyword.indexOf(this.locationnum[this.qlocation-1])
						})
					} else {
						console.log('之前没有其他条件');
						
						this.$emit('condition', this.$store.state.infoList.filter(item => {
							
							return item.Keyword.indexOf(this.locationnum[this.qlocation-1])>=0
						}));
						console.log(this.$store.state.infoList.filter(item => {
							
							return item.Keyword.indexOf(this.locationnum[this.qlocation-1])>=0
						}))
						
		this.keepcondition = this.$store.state.infoList.filter(item => {
							return item.Keyword.indexOf(this.locationnum[this.qlocation-1])>=0
						})
					}
				}if(this.housestyle){
					console.log('有户型的条件')
					if(this.keepcondition.length>0) {
						console.log('之前有其他条件')
						if(this.housestyle==5){
							this.$emit('condition',this.keepcondition.filter(item =>{
								return item.Housestyle != '一居'&&(item.Housestyle !='二居') && (item.Housestyle !='三居') && (item.Housestyle !='四居');
							}));
							this.keepcondition = this.keepcondition.filter(item => {
												return item.Housestyle != '一居'&&(item.Housestyle !='二居') && (item.Housestyle !='三居') && (item.Housestyle !='四居')
											})
						}else{
							
							this.$emit('condition', this.keepcondition.filter(item => {
								return item.Housestyle == this.homenum[this.housestyle-1]
							}));
							this.keepcondition = this.keepcondition.filter(item => {
												return item.Housestyle == this.homenum[this.housestyle-1]
											})
						}
					} else {
						console.log('之前没有其他条件');
						if(this.housestyle==5){
							this.$emit('condition',this.$store.state.infoList.filter(item =>{
								return item.Housestyle != '一居'&&(item.Housestyle !='二居') && (item.Housestyle !='三居') && (item.Housestyle !='四居');
							}))
						}else{
							this.$emit('condition', this.$store.state.infoList.filter(item => {
								return item.Housestyle == this.homenum[this.housestyle-1]
							}));
						}
						
						
						console.log(this.homenum[this.housestyle-1])
//		this.keepcondition = this.$store.state.infoList.filter(item => {
//							return item.Housestyle == this.housestyle
//						})
					}
				}
			}
		}
		}
</script>

<style>
	.con_box {
		background: #ecf0f1;
		padding-top: 14px;
		width: 100%;
	}
	
	.con_box_l {
		float: left;
		width: 48%;
		padding: 0 0px 0 0px;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.type {
		width: 100%;
		background: #fff;
		height: 40px;
		line-height: 40px;
		color: #2c3e50;
		margin-bottom: 14px;
	}
	
	.el-checkbox-button__inner {
		width: 100%;
	}
	
	.type_title {
		font-weight: normal;
		float: left;
		font-size: 16px;
		padding-left: 30px;
		box-sizing: border-box;
		width: 25%;
	}
	
	.el-select {
		width: 75%;
	}
	
	.el-input {
		width: 100%;
	}
	
	.keytype .el-input {
		width: 75%;
	}
	
	.con_box_r {
		float: right;
		width: 50%;
		padding: 0 0px 0 0px;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.el-date-editor {
		margin-left: 20px;
	}
	
	.type_title_location {
		width: 8%;
	}
	
	.el-radio {
		color: #606266;
		cursor: pointer;
		margin-right: 4px;
	}
	
	.el-radio__label {
		font-size: 14px;
		padding-left: 2px;
	}
	
	.type_title_housestyle {
		width: 8%;
	}
	
	.type_title_housestyle .el-radio {
		margin-right: 10px;
	}
	
	.claerfloat {
		clear: both;
	}
</style>