/// <reference types="wot-design-uni/global" />
/// <reference types="@uni-helper/uni-types" />
export {}

declare module "vue" {
    interface GlobalComponents {
        HelloWorld: typeof import('./components/HelloWorld.vue')['default']
    }
}
