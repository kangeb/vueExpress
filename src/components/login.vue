<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        form: {
          username: '用户名',
          password: '密码'
        }
      }
    },
    methods: {
      login() {
        axios.get('http://localhost:3000/users/login',{params:this.form}).then((response) => {
					console.log(response); //请求正确时执行的代码
          var data=JSON.parse(response.data.user.data)
					if(data[0].uuid != ""){
                            this.$router.push({ name:'Body', params: data[0]})
                    }
				}).catch(function(response) {
					console.log(response); //发生错误时执行的代码  
				});
      }
    }
  }
</script>
