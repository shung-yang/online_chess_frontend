<template>
  <div class="container">
    <div class="game-title-container">
      <img src="@/assets/online war chess.png">
      <!-- <img src="assets/pixilart-game[-title.png"> -->
    </div>
    <div class="form">
      <div>
        <label>Email</label>
        <input v-model="inputs.email" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="inputs.password" type="password">
      </div>
      <button id="login-submit" @click="login(inputs, $router)">Login</button>
      <button id="change-account-info" @click="changeAccountInfo">change Account Info</button>
      <button id="test-auth" @click="verifyToken()">test verify token</button>
    </div>
  </div>
  <div>{{ inputs }}</div>>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { login, changeAccountInfo, verifyToken } from "../functions/user";

export default defineComponent({
  setup(props) {
    const inputs = reactive({
      email: "",
      password: "",
    });

    return {
      inputs,
      login,
      changeAccountInfo,
      verifyToken,
    }
  }
})
</script>

<style scoped>
.container {
  padding: 10% 20%;
}
.game-title-container {
  text-align: center;
}
.form {
  text-align: center;
}
.form label {
  color: white;
}
</style>