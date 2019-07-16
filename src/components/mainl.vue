<template>
 <div class = 'main'>
     
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
  </el-tabs>
       <!-- <ul>
			<li v-for="e in employee" :key="e.id">{{e.name}}</li>
		</ul> -->
      <img src="http://www.xiaozhu.com/xz_web2/order/style/images/img/no_list_lodger.png" alt="">
    </div>
</template>

<script>
  export default {
   data() {
      return {
        activeName: 'first',
        	// employee:[]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
  
</script>

<style>
/* 中间部分 */
  .main img {
    margin: auto 300px;
  }
/* 中间部分结束 */
</style>
