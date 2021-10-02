<template>
  <v-app id="dashboard-view" wrap>
    <Toolbar />
    <v-content >
      <v-fade-transition mode="out-in">
        <v-container fluid>
          <router-view />
        </v-container>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>
<script>
import Toolbar from "./Toolbar";
export default {
  components: {Toolbar}
}
</script>