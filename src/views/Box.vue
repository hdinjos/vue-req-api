<template>
  <div>
    <v-container class="grey lighten-5">
      <!-- <v-row class="mb-6" no-gutters>
        <v-col class="mb-6" sm="6" md="8" cols="12">
          <v-card class="pa-2" outlined tile>
            Col 1 {{ $store.state.num }}</v-card
          >
        </v-col>
        <v-col sm="6" md="4" cols="12">
          <v-card class="pa-2" outlined tile> Col 2 </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-6" no-gutters>
        <v-col class="mb-6" sm="4" md="10" cols="6">
          <v-card class="pa-2" outlined tile> Col 1 </v-card>
        </v-col>
        <v-col sm="4" md="2" cols="6">
          <v-card class="pa-2" outlined tile> Col 2 </v-card>
        </v-col>
      </v-row> -->

      <!-- <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="sm">
          <v-card class="pa-2" outlined tile> col </v-card>
        </v-col>
      </v-row> -->
      <v-text-field
        label="Masukkan Tugas"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn @click="displayUser" depressed color="primary"> Get Users </v-btn>
        </v-col>
      </v-row>

      <v-list>
      <v-list-item
        v-for="user in users"
        :key="user.id"
      >
        <v-list-item-content>
          <v-list-item-title >{{user.website}}</v-list-item-title>
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
      users: []
    }
  },
  methods: {
     displayUser: async function(){
      let getUser = await axios.get('https://jsonplaceholder.typicode.com/users');
      let data = await getUser.data;
      this.users = data;
    }
  },
  created: function(){
    this.displayUser();
  }
};
</script>

<style>
</style>