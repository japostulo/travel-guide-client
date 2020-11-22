<template>
    <div>
        <navbar />

        <router-view name="content"> </router-view>
        
    </div>
</template>

<script>
import navbar from '../components/Navbar'
export default {
    components:{
        navbar,
    }
}
</script>

<style>

</style>