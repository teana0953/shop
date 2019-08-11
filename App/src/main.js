import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited', age);
        }
    }
});

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.http.interceptors.push((req, next) => {
    console.log('interceptors', req);
    next(res => {
        res.json = () => { return {data: res.body} }
    });
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
