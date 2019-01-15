import Vue from 'vue'
import Router from 'vue-router'
import ErCboxInjest from '@/components/ErCboxInjest'
import Cbox from '@/components/Cbox'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: ErCboxInjest
        },
        {
            path: '/convert_er',
            name: 'Convert Cbox',
            component: ErCboxInjest
        },
        {
            path: '/cbox',
            name: 'Character box',
            component: Cbox
        }
    ]
})