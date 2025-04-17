export {}

declare module "vue" {
    interface GlobalComponents {
        HelloWorld: typeof import('./components/HelloWorld.vue')['default']
    }
}
