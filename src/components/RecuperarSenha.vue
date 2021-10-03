<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-card class="elevation-12" style="margin-top: -30%">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row class="fill-height">
                    <v-col cols="8">
                      <v-card-text class="mt-12">
                        <h1
                            class="text-center display-2 light-blue--text text--accent-4"
                        >Recuperar senha</h1><br>
                        <v-alert
                            v-show="showMessage"
                            dense
                            text
                            border="left"
                            type="success"
                        >
                          Um link foi enviado para o seu <strong>e-mail</strong>
                        </v-alert>
                        <v-form>
                          <v-text-field
                              v-model="email"
                              label="Email"
                              name="Email"
                              prepend-icon="email"
                              type="text"
                              color="light-blue accent-4"
                          />
                        </v-form>
                        <div class="text-center mt-3">
                          <v-btn @click="enviar" rounded color="light-blue accent-4" dark>ENVIAR E-MAIL</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="light-blue accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Olá, Amigo!</h1>
                        <h3
                            class="text-center mt-3"
                        >Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com
                          as instruções.</h3>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="12" class="light-blue accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Tudo certo!</h1>
                        <h2
                            class="text-center mt-3"
                        >
                          As instruções foram enviadas para o seu e-mail com sucesso!
                          Por favor verifique sua caixa de entrada.
                        </h2>
                        <div class="text-center mt-6">
                          <v-btn style="border:solid 2px;" rounded outlined dark @click="redirect('/login')">ENTRAR</v-btn>
                        </div>
                      </v-card-text>
                      <br/>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "ContatosRecuperarSenha",
  data() {
    return {
      email: "",
      showMessage: false,
      step: 1
    }
  },
  methods: {
    enviar() {
      this.email = "";
      this.step++;
    },
    redirect(route) {
      this.$router.push(route);
    },
  }
}
</script>
