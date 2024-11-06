// declarations.d.ts
declare module '@/services/appwrite'; // 세미콜론 추가

// shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
