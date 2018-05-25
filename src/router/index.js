import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Movies from '../components/Movies.vue'
import List from '../components/List.vue'
import Cinema from '../components/Cinema.vue'
import Host from '../components/Host.vue'
import Ratings from '../components/Ratings.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/home', name: 'home', component: Home},
    {path: '/movies', name: 'movies', component: Movies},
    {path: '/list', name: 'list', component: List},
    {path: '/cinema', name: 'cinema', component: Cinema},
    {path: '/host', name: 'host', component: Host},
    {path: '/ratings', name: 'ratings', component: Ratings}
  ]
})
