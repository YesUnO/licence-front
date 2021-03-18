<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-tabs>
        <v-tab key="new" to="/">
          New licence
        </v-tab>
        <v-tab key="list" to="/licences">
          Licence list
        </v-tab>
      </v-tabs>
      <v-spacer/>
      <login-component v-if="!Credentials.isAuthorized"/>
      <profile-dropdown v-if="Credentials.isAuthorized"/>  
    </v-app-bar>

    <v-main>
      <v-card class="mainCard">
        <router-view/>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

import {mapState} from 'vuex';
import ProfileDropdown from './components/ProfileDropdown.vue';
import LoginComponent from './components/LoginComponent.vue';
export default {
  name: 'App',

  components: {
    ProfileDropdown,
    LoginComponent
  },
  computed:{
    ...mapState({
      User: state => state.userInfo,
      Credentials: state => state.credentials,
      ActiveTab: state => state.activeTab
    }),
    activeTab:{
      get(){
        return this.ActiveTab;
      },
      set(tab){
        this.$store.commit('setActiveTab',tab);
      }
    }
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  .mainCard{
    max-width: 868px !important;
    margin: 0;
    margin-top: 150px;
    margin-bottom: 150px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .cardContent{
    padding: 24px;
  }
</style>
