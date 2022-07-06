<template>
    <Navbar />
    <h1>Properties</h1>
        <div class="products-container">
            <Card />
        </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Card from '../components/propertycard.vue'

export default {
    name: 'properties',
    components:{
        Navbar, Card
    },
    data() {
        return {
            properties: [ ]
        }
    },
    mounted() {
        fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => (this.properties = data));
    }
}
</script>