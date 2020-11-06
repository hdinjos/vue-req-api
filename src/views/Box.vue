<template>
  <div>
    <v-container class="grey lighten-5">
      <v-text-field
        v-model="newTask"
        label="Masukkan Tugas"
        hide-details="auto"
      ></v-text-field>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn @click="postTask" depressed color="primary"> Tambah Tugas </v-btn>
        </v-col>
      </v-row>

      <v-list>
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
      >
        <v-list-item-content>
          <v-list-item-title >{{task.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      items: [
        'Makan', "Ngegame"
        ],
      tasks: [],
      newTask: ''
    }
  },
  methods: {
     displayUser: async function(){
      let getTasks = await axios.get('http://192.168.1.26:3000/tasks');
      let data = await getTasks.data;
      this.tasks = data;
      console.log(data);
    },
    postTask: async function(){
      let task = {
        title: this.newTask
      }
      await axios.post('http://192.168.1.26:3000/task/add', task);
      this.displayUser();
    }
  },
  created: function(){
    this.displayUser();
  }
};
</script>

<style>
</style>