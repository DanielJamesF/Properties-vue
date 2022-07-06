<template>
    <Navbar />
    <div v-if="property">
        <div class="container">
            <div class="img">
                <img src="property.image" alt="">
            </div>
            <div class="info">
                <h4>
                    <span id="heading">Address:</span>
                    <span>
                        {{property.address.region}} 
                        <br> 
                        {{property.address.neighbourhood}} 
                        <br> 
                        {{property.address.street}} 
                    </span>
                </h4>
                <h4>
                    <span id="heading">Price:</span>
                    <span> 
                        ${{property.price}} 
                    </span>
                </h4>
                <h4>
                    <span id="heading">Land Size: </span>
                    <span>{{property.size}} Sqr Metre</span>
                </h4>
                <h4>
                    <span id="heading">Rooms: </span>
                    <span>
                        {{property.rooms.bedrooms}} Bedrooms 
                        <br> 
                        {{property.rooms.bathrooms}} Bathrooms
                    </span>
                </h4>
            </div>
        </div>
        <h1>Related</h1>
        <div class="related"></div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'property',
    props: ['id'],
    data() {
        return {
            property: null
        }
    },
    components: {
        Navbar
    },
    mounted() {
        fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => (this.properties = data));
    }
}
</script>
