<template>
    <v-container class="pt-15">
        <v-row>
            <v-col lg="6">
                <h2 class="intro-text">Bem-Vindo ao Simple Hotel</h2>
                <p class="description">Software para administração hoteleira.</p>
                
            </v-col>
            <v-col lg="6">
                <img width="100%" src="./../assets/hotel.jpg" alt="">
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