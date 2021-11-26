<template>
    <div>
    <form id="cad-form" method="POST" @submit="createBurger">
      <div class="input-container">
        <label for="nome">Prestador de Serviço:</label>
        <input type="text" id="1" name="nome" v-model="nome" placeholder="Informe o nome do prestador:">
        <input type="text" id="2" name="telefone" v-model="telefone" placeholder="Informe seu telefone:">
        <input type="text" id="2" name="email" v-model="email" placeholder="Informe seu email:">
        <input type="text" id="3" name="status" v-model="status" placeholder="Informe seu status:">
        <input type="text" id="4" name="descrição" v-model="descrição" placeholder="Informe sua descrição de serviço:">
        <input type="text" id="5" name="cidade" v-model="cidade" placeholder="Informe sua cidade:">
        <input type="text" id="6" name="UF" v-model="UF" placeholder="Informe sua UF:">
      </div>
      <div class="input-container">
        <input class="submit-btn" color="light-blue accent-4"  type="submit" value="Cadastrar">
      </div>
    </form>
  </div>
    
</template>

<script>
export default {
    name: "CadastroPrestadorServico"
}
</script>

<style scoped>
    #cad-form {
    max-width: 400px;
    margin: 0 auto;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid rgb(0, 140, 255);
  }
  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  .submit-btn {
    background-color: rgb(0, 140, 255);
    color:#ffffff;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
     width: 300px;
  }
  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>