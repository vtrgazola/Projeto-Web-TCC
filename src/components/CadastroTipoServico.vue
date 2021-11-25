<template>
  <div>
    <form id="cad-form" method="POST">
      <div class="input-container">
        <label for="nome">Tipo de Serviço:</label>
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Insira o Tipo de Serviço">
      </div>
      <div class="input-container">
        <input class="submit-btn" color="light-blue accent-4" type="submit" value="Salvar">
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "CadastroTipoServico"
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