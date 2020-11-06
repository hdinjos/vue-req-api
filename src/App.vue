<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"
      temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Tentang </v-list-item-title>
          <v-list-item-subtitle> daftar menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense nav>
        <v-list-item link to="/box">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar-stacked</v-icon>
          </v-list-item-icon>
          
          <v-list-item-content>
            <v-list-item-title>Box</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
      <v-list dense nav>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account-cog-outline </v-icon>
          </v-list-item-icon>
          
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="cyan" app>
      <v-app-bar-nav-icon @click.stop="drawer =!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Simpel Aplikasi</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false
  }),
};
</script>
