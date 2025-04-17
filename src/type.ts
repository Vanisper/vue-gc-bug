/// <reference types="wot-design-uni/global" />
export {}

declare module "vue" {
    interface GlobalComponents {
        HelloWorld: typeof import('./components/HelloWorld.vue')['default']
    }
}
