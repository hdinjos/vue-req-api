<template>
  <div class="home">
    <h1>Halo ini home</h1>
    <h1>{{number}}</h1>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="incStore"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <h1>{{num}} {{$store.state.num}}</h1>
    <h1>{{name}}</h1>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="changeNameOne"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function(){
    return {
      number: 0
    }
  },
  methods: {
    inc: function(){
      this.number += 1;
    },
    incStore: function(){
      this.$store.commit('addNumber');
    },
    changeName: function(){
      this.$store.commit('changeName'); //dati mutations

    }, changeNameOne: function(){
      this.$store.dispatch('cName'); //dari actions
    }
  },
  computed: {
    num: function(){
      return this.$store.state.num
    },
    name: function(){
      return this.$store.state.name;
    }
  }
}
</script>
