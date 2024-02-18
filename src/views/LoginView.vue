<template>
  <div><h1>Signin</h1></div>
  <br /> <br />
  <div>
    <center>
      <input type="text" placeholder="Email" v-model="emaill"/>
      <br />
      <br />
      <input type="password" placeholder=" Password" v-model="password"/>
      <br />
      <br />
      <button type="Signin" v-on:click="click()">Sign in</button>
      <br />
      <br />
    </center>
  </div>
  <br/><br/>
  <div><center><h3>Don’t have a account? Sign up</h3></center></div>

</template>

<script >
export default {
  name: "Login",
  data() {
    return {
      emaill: null,
      password: null,
    };
  },
  methods: {
    click() {
      console.warn("values : ", this.emaill, this.password);
    },
  },
};
</script>

<style scoped>
h1 {
  color: chocolate;
}
</style>
