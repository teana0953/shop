import Home from './components/Home.vue';
import Products from './components/product/Products.vue';
import ProductDetail from './components/product/ProductDetail.vue';

export const routes = [
    { path: '/', component:  Home},
    { path: '/products', component:  Products},
    { path: '/products/:id', component:  ProductDetail, props: true}
];