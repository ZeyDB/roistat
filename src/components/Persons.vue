<template>
  <div class="container">

    <div class="persons-table">
      <span class="persons-table__title">Пользователи</span>
      <vue-good-table :columns="columns" :rows="persons"/>
      <button @click="addPersonForm = true">Добавить</button>
    </div>

    <div class="add-person" v-if="addPersonForm">
      <span class="add-person__title">Добавление пользователя</span>
      <button class="add-person__close" @click="addPersonForm = false">&times;</button>
      <AddPerson @add-person="addPerson"/>
    </div>

  </div>
</template>

<script>
import AddPerson from '@/components/AddPerson'

export default {
  name: 'Table',
  data () {
    return {
      columns: [
        {label: 'Имя', field: 'name'},
        {label: 'Телефон', field: 'phone'} 
      ],
      persons: [
        {name: 'Марина', phone: '+7 941 123 21 42'},
        {name: 'Петр', phone: '+7 941 123 21 41'},
        {name: 'Алексей', phone: '+7 941 123 21 43'},
        {name: 'Борис', phone: '+7 941 123 21 45'}
      ],
      addPersonForm: false,
    }
  },
  methods: {
    addPerson(person) {
      this.persons.push(person);
      this.savePersons();
    },
    savePersons() {
      const parsed = JSON.stringify(this.persons);
      localStorage.setItem('persons', parsed);
    }
  },
  mounted() {
    if (localStorage.getItem('persons')) {
      this.persons = JSON.parse(localStorage.getItem('persons'));
    }
  },
  components: {
    AddPerson
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}
.persons-table {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 1em;
  background: linear-gradient(#f4f5f8,#f1f3f6);
  border-radius: 7px;
}
.persons-table__title {
  display: block;
  width: 100%;
  font-weight: 600;
  padding-left: 1em;
  margin-bottom: 1em;
  text-align: left;
}
.vgt-wrap {
  width: 100%;
  margin-bottom: 1em;
}
.add-person {
  position: relative;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 1.5em 1em;
  background: linear-gradient(#f4f5f8,#f1f3f6);
  border-radius: 7px;
}
.add-person__title {
  display: block;
  font-weight: 600;
  padding-left: 1em;
  margin-bottom: 1em;
  text-align: left;
}
.add-person__close {
  position: absolute;
  right: 5px;
  top: 7px;
  min-width: auto;
  width: 40px;
  background: none;
  font-size: 1.5em;
  padding: 10px 0 0;
}
</style>