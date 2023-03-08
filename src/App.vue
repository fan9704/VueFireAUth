
<template>
  <div>
      <button class="github-auth-btn" v-on:click="login">
      GitHub Login</button>
  </div>
  <div v-show="loginStatus">Login Success{{ username }}</div>
  <div v-show="!loginStatus">Login Status:Not Login</div>
</template>

<style scoped>
</style>

<script>
import {signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {auth,githubProvider} from "./utils/firebaseCore"

export default{
  name:"MainPage",
  data(){
    return{
      loginStatus:false,
      username:""
    }
  },
  methods:{
    login(){
      signInWithPopup(auth,githubProvider)
      .then((result)=>{
        this.username=result.user.displayName;
        this.loginStatus=True;
      })
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
      });
    }
  }
}
</script>