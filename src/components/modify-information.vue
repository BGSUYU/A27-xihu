<script setup>
    import {reactive, ref} from 'vue';
        const state=reactive({
    username:'',
    company:'',
    department:'',
    position:'',
    phonenumber:'',
    email:''
    })
</script>
<template>
    <div class="modify">
        <form @submit.prevent="submitForm">
        <h1>修改资料</h1>
        <div class="input-group">
            <label for="username">姓名</label>
            <input type="text" id="username" v-model="state.username" placeholder="请输入名称" required />
        </div>
        <div class="input-group">
            <label for="company">公司</label>
            <input type="text" id="company" v-model="state.company" placeholder="请输入公司名称" required />
        </div>
        <div class="input-group">
            <label for="department">部门</label>
            <input type="text" id="department" v-model="state.department"placeholder="请输入部门名称" required />
        </div>
        <div class="input-group">
            <label for="position">职位</label>
            <input type="text" id="position" v-model="state.position"placeholder="请输入职位名称" required />
        </div>
        <div class="input-group">
            <label for="phonenumber">电话</label>
            <input type="number" id="phone-number" v-model="state.phonenumber"placeholder="请输入电话号码" required />
        </div>
        <div class="input-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="state.email"placeholder="请输入邮箱地址" required />
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
</template>
<style scoped>
.modify {
  max-width: 400px;
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 93%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #5c6bc0;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3f51b5;
}
</style>