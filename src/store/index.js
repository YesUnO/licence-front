import Vue from 'vue';
import Vuex from 'vuex';
import LicenceModule from './LicenceModule';
import UserModule from './UserModule';

Vue.use(Vuex);

const initialState = {
  activeTab: 'entry',
  dialog: false,
  detailId:'',
  credentials:{
      isAuthorized: false,
      token:''
  },
  userInfo:{

  }
}

export default new Vuex.Store({
  state: {
    activeTab: 'entry',
    dialog: false,
    detailId:'',
    credentials:{
        isAuthorized: false,
        token:''
    },
    userInfo:{

    }
  },
  mutations: {
    login(state, payload) {
      state.credentials = payload.credentials;
      state.userInfo = payload.user;
    },
    setAuthorized(state, token) {
      state.credentials ={token:  token, isAuthorized: true};
    },
    setUser(state, payload) {
      state.userInfo = payload;
    },
    logout(state){
        Object.assign(state,initialState);
    },
    setActiveTab(state, tab) {
      state.activeTab = tab;
    },
    setDialog(state,payload){
      state.dialog = payload;
    },
    setDetailId(state,id){
      state.detailId = id;
    },
    setUserPicture(state,payload){
        state.userInfo.picture = payload;
    }
  },
  actions: {
  },
  modules: {
    licences: LicenceModule,
    user: UserModule
  }
})
