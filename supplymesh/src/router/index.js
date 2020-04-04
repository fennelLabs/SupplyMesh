import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import SupplyMesh from '@/components/SupplyMesh'
import pollWeb3 from '../util/pollWeb3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/mesh',
      name: 'SupplyMesh',
      component: SupplyMesh
    }
  ]
})