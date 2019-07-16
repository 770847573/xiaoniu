<template>
  <div class="zhuye">
    <div class="myf">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="passw1">
          <el-input v-model="ruleForm.passw1"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passw2">
          <el-input v-model="ruleForm.passw2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //      mydiv:daohan
  //   },

  data() {
    var validatePass = (rule, value, callback) => {
      if (this.ruleForm.passw2 !== "") {
        this.$refs.ruleForm.validateField("passw2");
      }
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passw1) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        passw1: "",
        passw2: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        passw1: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        passw2: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //post请求
            this.axios.post("/user", this.ruleForm)
            .then(function(response) {
			  console.log(response);
			  let shuju  = response.data.r
			  if(shuju == 'ok'){
				  alert('注册成功')
			  }

            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped="scoped">
/* * {
  margin:0px;
  padding: 0px;
} */
.myf {
  width: 45%;

  position: absolute;
  top: 100px;
  left: 400px;
}
.zhuye {
  width: 100%;
  height: 1000px;
  position: relative;
  background-color: aqua;
}
</style>
<style>
.myf .el-input__inner {
  border-radius: 0;
}
</style>
