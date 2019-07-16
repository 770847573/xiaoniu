<template>
 <div class = 'geren'>
      <div class="geren1">基本信息</div>
       <el-divider></el-divider>
         <p>用户名:</p><br><br>
         <p>密码:</p>
     </div>
 
</template>

<script>
  export default {
    // 必须写data
   data() {
       return{}
    },
    methods: {
      
      }
    }
  
  
</script>

<style>
/* 中间部分 */

  .geren  {
    height: 200px;
    width: 1000px;
    border: 1px solid #000
  }
  .geren1 {
      color: rgb(17, 219, 44);
      border-block-color: 1px solid #000
  }
/* 中间部分结束 */
</style>