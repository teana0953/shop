<template>
<div class="component">
    <h1>The Add Product Component</h1>
    <input type="text" placeholder="title" v-on:input="changeTitle" />
    <input type="number" placeholder="price" v-on:input="changePrice" />
    <button @click="addProduct">Add Product</button>
    <hr />
    <div v-if="loading" class="loader" id="loader-2">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div v-else class="row">
        <app-product-detail v-show="!loading" class="col-xs-12 col-sm-6" v-for="item in items" :key="item.title" :title="item.title" :price="item.price"></app-product-detail>
    </div>
    <button class="btn btn-primary" @click="gotoHome">Go to Home</button>
</div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";

export default {
    props: {
        items: {
            type: Array,
            default: function () { return [] }
        },
        loading: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        price: {
            type: Number
        }
    },
    created() {
        console.log("created");
        this.loading = true;
        this.$http
            .get(`/admin/api/products`)
            .then(res => {
                console.log("getAllProduct res", res, res.json());
                this.items = res.json().data;
            })
            .catch((err) => {

            })
            .finally(() => {
                this.loading = false;
            });
    },
    methods: {
        changeTitle(event) {
            this.title = event.target.value;
        },
        changePrice(event) {
            this.price = event.target.value;
        },
        addProduct() {
            console.log("addProduct test", this.title);
            this.loading = true;
            this.$http
                .post(`/admin/api/product`, {
                    title: this.title,
                    price: this.price
                })
                .then(res => {
                    console.log("addProduct res", res, res.json());
                    this.items.push(res.json().data);
                }).finally(() => {
                    this.loading = false;
                });
        },
        gotoHome() {
            this.$router.push("/");
        }
    },
    components: {
        appProductDetail: ProductDetail
    }
};
</script>

<style scoped>
div {
    background-color: #e1f5fe;
}

.loader {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;
}

#loader-2 span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #3498db;
    margin: 35px 5px;
}

#loader-2 span:nth-child(1) {
    animation: bounce 1s ease-in-out infinite;
}

#loader-2 span:nth-child(2) {
    animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader-2 span:nth-child(3) {
    animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce {

    0%,
    75%,
    100% {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }

    25% {
        -webkit-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        -o-transform: translateY(-20px);
        transform: translateY(-20px);
    }
}
</style>
