import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HandicapView from "@/views/HandicapView";
import HandicapDetails from "@/views/handicaps/HandicapDetails";
import HandicapScores from "@/views/HandicapScores";
import AddHandicap from "@/views/handicaps/AddHandicap";
import EditHandicap from "@/views/handicaps/EditHandicap";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/handicaps',
    name: 'handicaps',
    component: HandicapView
  },
  {
    path: '/handicaps/:id',
    name: 'HandicapDetails',
    component: HandicapDetails,
    props: true
  },
  {
    path: '/handicapDetails/:id',
    name: 'HandicapScores',
    component: HandicapScores,
    props: true
  },
  {
    path: '/handicaps/addHandicap',
    name: 'AddHandicap',
    component: AddHandicap,
    props: true
  },
  {
    path: '/handicaps/editHandicap/:id',
    name: 'EditHandicap',
    component: EditHandicap,
    props: true

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
