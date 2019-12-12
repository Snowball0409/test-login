<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <label>User Name</label>
      <input type="text" v-model="userName" required>
      <br>
      <label>Password</label>
      <input type="password" v-model="password" required>
      <br>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        userName: '',
        password: '',
        token:''          
      }
    },
    methods: {
      login(){
        if( this.userName == 'abcd' && this.password == '1234' ){
          this.$set(this.token, 'token', 'ImLogin')
          this.$router.push('/');
        }
        else
          alert('login failed')
      }
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
