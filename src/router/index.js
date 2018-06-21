import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import RecommendDetail from 'components/recommend-detail/recommend-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     redirect: '/recommend'
    },
    {
      path:'/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: RecommendDetail
        }
      ]
    },
    {
      path:'/rank',
      component: Rank
    },
    {
      path:'/singer',
      component: Singer
    },
    {
      path:'/search',
      component: Search
    }
  ]
})
