<template>
  <form @submit.prevent="onSubmit" class="add-person__form">
    <div class="form-fields">
      <input type="text" name="name" placeholder="Имя" v-model="name">
      <input type="text" name="phone" placeholder="Телефон" v-model="phone">
    </div>
    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.name.trim() && this.phone.trim()) {

        const newPerson = {
          name: this.name,
          phone: this.phone
        }
        
        this.$emit('add-person', newPerson)
        this.name = ''
        this.phone = ''
      
      }
    }
  }
}
</script>

<style>
.add-person__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.form-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2em 0;
}
.form-fields input {
  width: 300px;
  border: 1px solid #ddd;
  margin-bottom: 1em;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>