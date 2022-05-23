<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12" style="margin-top: -30%">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 black--text text--accent-4"
                        >Faça Seu Login</h1><br>
                      
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="black accent-4"
                          />

                          <v-text-field
                            id="password"
                            label="Senha"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="black accent-4"
                          />
                        </v-form>
                        <div class="text-center mt-4">
                          <v-btn @click="redirect('/recuperar')">Esqueceu sua senha ?</v-btn>
                        </div>

                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="grey accent-4" dark>ENTRAR</v-btn>
                      </div>
                      <br>
                    </v-col>
                    <v-col cols="12" md="4" class="grey accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Olá, Amigo!</h1>
                        <h5
                          class="text-center"
                        >Insira seus dados pessoais e comece a jornada conosco</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">INSCREVER-SE</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="light-blue accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bem vindo!</h1>
                        <h5
                          class="text-center"
                        >Para se manter conectado conosco, faça o login com suas informações pessoais</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">ENTRAR</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 light-blue--text text-accent-4">Criar Conta</h1>
                        
                        <h4 class="text-center mt-4">Informe seus dados para cadastro</h4>
                        <v-form>
                          <v-text-field
                            label="Nome"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="light-blue accent-4"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="light-blue accent-4"
                          />

                          <v-text-field
                            id="password"
                            label="Senha"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="light-blue accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-3">
                        <v-btn rounded color="light-blue accent-4" dark>INSCREVER-SE</v-btn>
                      </div>
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
  data: () => ({
    name: "Contatos",
    step: 1
  }),
  props: {
    source: String
  },
  methods: {
    redirect(route) {
      this.$router.push(route);
    },
  }
};
</script>