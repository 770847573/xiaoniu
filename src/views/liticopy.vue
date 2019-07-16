<template>
  <div id="home">
    <div class="herde">
      <el-row :gutter="20">
        <el-col :span="6" :offset="1">
          <div class="grid-content bg-purple">
            <img src="http://www.xiaozhu.com/xz_web2/order/style/images/logo.png" alt />
          </div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple grid-content1">
            <el-row>
              <el-col :span="6">
                <div class="grid-content bg-purple bg-purple1">
                  <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                      下拉菜单
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                      <el-dropdown-item command="b">狮子头</el-dropdown-item>
                      <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple bg-purple1">
                  <i>.</i>

                  <el-dropdown>
                    <span class="el-dropdown-link">
                      下拉菜单
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                      <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple bg-purple1">
                  
                    <i class="el-icon-mobile-phone"></i>
                    <i>手机小猪</i>
                   
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple bg-purple1">
                  <el-button type="primary" class="eb">主要按钮</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 页面展示 -->
    <div>
      <el-container>
        <el-header class="ehr">
          <div class="shouye">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-header>
        <el-container>
          <div class="aside">
            <ul>
              <li>
                <a href="/wode">
                  <i class="el-icon-s-custom"></i>
                  <span>个人资料</span>
                </a>
              </li>
              <li>
                <a href="/liti">
                  <i class="el-icon-shopping-cart-2"></i>
                  <span>订单</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-chat-line-round"></i>
                  <span>消息</span>
                </a>
              </li>
            </ul>
          </div>

          <mydiv-1></mydiv-1>
        </el-container>
      </el-container>
    </div>
    <!-- 页面展示结束 -->
  </div>
</template>
<style>
/* 头部导航 */
.herde {
  width: 100%;
  height: 70px;
  border: 1px solid rgb(0, 2, 5);
}
.herde img{
  widows: 50px;
  height: 50px;
  margin-top: 10px;
}
.grid-content {
  background-color: #fff;
}
.grid-content1 {
  height: 50px;
  background-color: #fff;
  width: 400px;
}
.bg-purple1 {
  line-height: 50px;
  height: 35px;
}
.bg-purple1 i {
  font-size: 14px;
  font-style: normal;
  color: #000;
}
/* 头部导航结束 */
/* 页面展示开始 */
.ehr {
  position: relative;
}
.shouye {
  position: absolute;
  top: 20px;
  left: 60px;
}
.cdh1 {
  margin: 0px;
  padding: 0px;
  width: 100px;
  height: 50px;
}
.aside {
  height: 500px;
  width: 200px;
  position: relative;
}
.aside ul {
  list-style: none;
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 60px;
}
.aside ul li {
  width: 100%;
  height: 40px;
  font: italic bold 20px arial, sans-serif;
  height: 30px;
  margin-bottom: 30px;
  color: rgb(242, 240, 245);
}
.aside ul li a {
  text-decoration: none;
}

/* 页面展示结束 */
</style>
  
<script>
import gerenziliao from "@/components/gerenziliao.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    "mydiv-1": gerenziliao
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>
