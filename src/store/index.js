import Vue from 'vue'
import Vuex from 'vuex'
import cbox from './modules/cbox'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    modules: {
        cbox: cbox
    },
    actions: {
    }
})
