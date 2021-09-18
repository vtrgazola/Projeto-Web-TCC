<template>
    <v-container class="pt-15">
        <v-row>
            <v-col lg="6">
                <h2 class="intro-text">Bem-Vindo ao OperatorX APP</h2>
                <p class="description">Esssa é uma mera introdução da nossa página principal</p>
                
                <v-btn color="success" class="white--text mr-10" rounded>Começar Agora</v-btn>
                <v-btn color="indigo" class="white--text" rounded>
                    <v-icon>mdi-play-circle</v-icon> Olha o vídeo de demonstração
                </v-btn>
            </v-col>
            <v-col lg="6">
                <img width="100%" src="./../assets/hero-img.png" alt="">
            </v-col>
        </v-row>   
    </v-container>
</template>

<script>
export default {
        name: "HomePageIndex"
    }
</script>

<style scoped>
    h2.intro-text {
        font-size: 60px;
        font-weight: bold;
        color: #444;
    }
    p.description {
        font-size: 19px;
        margin: 32px 0px;
        color: #444444ba;
    }
</style>