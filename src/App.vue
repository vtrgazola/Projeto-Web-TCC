<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 blue--text text--accent-3"
                        >Faça Seu Login</h1><br>
                      
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Senha"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Esqueceu sua senha ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="blue accent-3" dark>ENTRAR</v-btn>
                      </div>
                      <br>
                    </v-col>
                    <v-col cols="12" md="4" class="blue accent-3">
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
                    <v-col cols="12" md="4" class="blue accent-3">
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
                        <h1 class="text-center display-2 blue--text text--accent-3">Criar Conta</h1>
                        
                        <h4 class="text-center mt-4">Informe seus dados para cadastro</h4>
                        <v-form>
                          <v-text-field
                            label="Nome"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Senha"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue accent-3"
                          />

                           <v-text-field
                            id="confirmpassword"
                            label="Confirme Sua Senha"
                            name="confirmpassword"
                            prepend-icon="lock"
                            type="confirmpassword"
                            color="blue accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="blue accent-3" dark>INSCREVER-SE</v-btn>
                        <br><br>
                        <v-btn rounded color="blue accent-3" dark>CANCELAR</v-btn>
                      </div>
                      <br>
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
    step: 1
  }),
  props: {
    source: String
  }
};
</script>