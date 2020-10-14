import Vue from 'vue'
import svgIcon from '@/components/svgicon'
Vue.component('svg-icon', svgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)