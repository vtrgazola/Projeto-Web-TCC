<template>
  <v-app>
    <v-main>

      <!--HomePageIndex section-->
        <HomepageIndex />
        <!--Contatos section-->
        <Contatos />
        <!--ContatosRecuperarSenha section-->
        <ContatosRecuperarSenha />
    </v-main>
  </v-app>
</template>

<script>

import HomepageIndex from "./components/HomePageIndex";
import Contatos from "./components/Contatos";
import ContatosRecuperarSenha from "./components/ContatosRecuperarSenha";


export default {
  name: 'App',
  components: {HomepageIndex, Contatos, ContatosRecuperarSenha },
}

</script>
