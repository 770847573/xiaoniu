<template>
  <el-container>
    <div class="heide">
        <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="10"><div class="grid-content bg-purple"></div></el-col>
</el-row>
    </div>
  </el-container>
</template>
<style>
.heide{
    height: 50px;
}
 .grid-content{
      height: 36px;
      background-color: red;
 }

</style>
