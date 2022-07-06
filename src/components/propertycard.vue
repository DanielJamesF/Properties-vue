<template>
    <div class="card" v-for="property of properties" :key="property.id">
        <router-link :to="{name: 'property', params:{id: property.id}}">
            <img :src="property.image" class="card-img-top" alt="...">
            </router-link>
            <div class="card-body">
                <h5>{{ property.address.region }}/ {{ property.address.neightbourhood }}/ {{ property.address.street }}</h5>
                <h6>${{ property.price }}</h6>
                <p>Bedrooms: {{ property.rooms.bedrooms }}</p>
                <p>Bathrooms: {{ property.rooms.bathrooms }}</p>
                <p>Land-Size: {{ property.size }} Sqr Metre</p>
            </div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'propertycard',
    data() {
        return{
            properties:[]
        }
    },
    mounted(){
        fetch(" http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => (this.properties = data));
    }
}
</script>
