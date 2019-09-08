<template>
  <section>
    <div>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam.
      </h3>
      <form action="/pagina-processa-dados-do-form" method="post">
        <div>
          <label for="name">COMPANY NAME</label>
          <input type="text" id="name" placeholder="e.g Your Company Name" />
        </div>
        <div>
          <label for="spend">COMPANY SPEND</label>
          <input type="text" id="spend" placeholder="e.g $150,000" />
        </div>
        <div>
          <label for="spend-ability">COMPANY SPEND ABILITY</label>
          <input type="text" id="spend-ability" placeholder="e.g $150,000 - $330,000" />
        </div>
        <div>
          <label for="notes">NOTES</label>
          <textarea type="text" id="notes" placeholder="e.g Good Tech Company" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyData",
  created() {
    document.title = "Home | Company Data";
  }
};
</script>

<style scoped>
section {
  border: 1px solid #d4d9e3;
  border-radius: 4px;
  padding: 30px;
  margin-left: 30px;
  max-width: 860px;
  color: #505050;
}

form div {
  display: flex;
  flex-direction: column;
}
form div label {
  color: #b1b1b1;
  margin: 35px 0 5px 0;
}
form div input,
form div textarea {
  border: 1px solid #ced2e0;
  border-radius: 4px;
  padding: 10px 20px;
}
form div input::placeholder,
form div textarea::placeholder {
  color: #ced2e0;
}
form div input {
  max-width: 300px;
}
form div textarea {
  resize: none;
  height: 200px;
}
</style>
