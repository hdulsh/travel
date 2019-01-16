/**
 * Created by 110 on 2019/1/14.
 */

import Vue from  'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutaitions'

Vue.use(Vuex)



export default new Vuex.Store({
  state,
  // actions:{
  //   changeCity (ctx,city){
  //     ctx.commit('changeCity',city)
  //   }
  // },
  mutations,

})
