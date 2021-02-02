import Vue from 'vue'
Vue.component("Bit", () => import("/Users/xule/vuepress/docs/.vuepress/components/Bit"))
Vue.component("OtherComponent", () => import("/Users/xule/vuepress/docs/.vuepress/components/OtherComponent"))
Vue.component("UpgradePath", () => import("/Users/xule/vuepress/docs/.vuepress/components/UpgradePath"))
Vue.component("demo-1", () => import("/Users/xule/vuepress/docs/.vuepress/components/demo-1"))
Vue.component("diagram-markdown-slot-relationship", () => import("/Users/xule/vuepress/docs/.vuepress/components/diagram-markdown-slot-relationship"))
Vue.component("svg-container", () => import("/Users/xule/vuepress/docs/.vuepress/components/svg-container"))
Vue.component("Foo-Bar", () => import("/Users/xule/vuepress/docs/.vuepress/components/Foo/Bar"))
Vue.component("CodeBlock", () => import("/Users/xule/vuepress/node_modules/@vuepress/theme-default/global-components/CodeBlock"))
Vue.component("Badge", () => import("/Users/xule/vuepress/node_modules/@vuepress/theme-default/global-components/Badge"))
Vue.component("CodeGroup", () => import("/Users/xule/vuepress/node_modules/@vuepress/theme-default/global-components/CodeGroup"))


export default {}