<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row class="mb-6" no-gutters>
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
      </v-row>

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
      <v-btn depressed color="primary"> Primary </v-btn>
      <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon
            v-if="item.icon"
            color="pink"
          >
            mdi-star
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      alignments: ["start", "center", "end"],
      justify: ["start", "center", "end", "space-around", "space-between"],
      items: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
    };
  },
};
</script>

<style>
</style>