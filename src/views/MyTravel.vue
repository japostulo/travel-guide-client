<template>
    <div>
        <make-relatory :travels="travels"/>

    </div>
</template>

<script>
import MakeRelatory from '@/components/MakeRelatory'

export default {
    components: {
        MakeRelatory,
    },
    data() {
        return {
            travels: [],
        }
    },
    mounted() {
        this.$axios('/api/travel/', {
            params:{
                'user': JSON.parse(localStorage.user).id}
            })  
            .then(res => {
                this.travels = res.data
            })
    }
}
</script>

<style>

</style>