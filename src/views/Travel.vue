<template>
    <div class="">        
        <div class="flex items-center justify-center w-screen mt-10" v-show="toggle">
            <div class="mr-4">
                <select v-model="indexFrom" class="p-2 text-1xl m-1 border rounded">
                    <option :value="index" v-for="(city, index) in cities" :key="index">
                        {{city.name}}
                    </option>
                </select>

            </div>
            <div class="fa fa-arrow-right text-1xl">

            </div>
            <div class="ml-4">
                <select v-model="indexTo" class="p-2 text-1xl m-1 border rounded">
                    <option :value="index" v-for="(city, index) in cities" :key="index">
                        {{city.name}}
                    </option>
                </select>

            </div>

            <button class="bg-blue-500 ml-2 p-1 pl-2 pr-2 rounded text-white" @click="rel">Simular</button>
        </div>

        <div class="w-screen flex justify-center text-center" v-show="!toggle">
            <div class="w-1/2">
                <rel @toggle="toggle = $event" :to="to" :from="from" :distance="distance" :value="value" />
            </div>
        </div>

    </div>
</template>

<script>
import Rel from '../components/Rel'
import Navbar from '../components/Navbar'

export default {
    components:{
        Rel,
        Navbar
    },
    data(){
        return {
            cities: {},
            from: {},
            indexFrom: 0,
            to: {},
            indexTo: 0,
            toggle: true,
            distance: 0,
            value: '',
        }
    },
    methods:{
        getCities() {
            this.$axios(`/api/city/`)
                .then(res => {
                    this.cities = res.data;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        rel() {
            this.from = this.cities[this.indexFrom];
            this.to = this.cities[this.indexTo];
            this.$axios('/api/travel/calc', {
                params: {
                    lat1: this.from.coordinate_a,
                    lon1: this.from.coordinate_b,
                    lat2: this.to.coordinate_a,
                    lon2: this.to.coordinate_b,
                }
            })
                .then(res => {
                    this.distance = res.data.distance
                    this.value = res.data.value
                    this.toggle = false;
                })
        },
    },
    mounted(){
        this.getCities();
    }
}
</script>

<style>

</style>