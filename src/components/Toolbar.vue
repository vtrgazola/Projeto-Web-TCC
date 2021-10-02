<template>
  <div>
    <v-app-bar
        color="light-blue accent-4"
        elevate-on-scroll
        clipped-left app
    >
      <v-btn
          color="white"
          style="font-size: 26px; text-transform: none;"
          @click="redirect('/')"
          large
          text
      >
        <strong>OperatorX</strong>
      </v-btn>
      <v-spacer />
      <v-btn
          @mouseover="changeIsTextLoginButton(false)"
          @mouseleave="changeIsTextLoginButton(true)"
          color="white"
          style="font-size: 18px; text-transform: none; border:solid 2px;"
          @click="redirect('/login')"
          large
          rounded
          outlined
      >

        <strong>ENTRAR</strong>

      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      isOver: true,
    }
  },
  methods: {
    redirect(route) {
      this.$router.push(route);
    },
    changeIsTextLoginButton(isText) {
      this.isOver = isText;
    },
  }
}
</script>