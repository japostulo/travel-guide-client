<template>
    <div class="h-screen w-screen flex justify-center items-center">
            
        <div class="w-1/3">
            <div class="flex justify-center">
                <img src="../../src/assets/Travel-Guide.png" alt="">
            </div>

            <div class="w-full font-thin">
                <div class="font-semibold w-full text-lg">
                    <div>
                        <label for="user">E-mail</label>            
                    </div>
                    <input type="text" placeholder="example@gmail.com" v-model="email" id="user" class="w-full p-1 font-thin text-black border border-gray-300 bg-white text-md rounded focus:outline-none" :class="{'border-red-500': error != ''}">
                </div>

                <div class="font-semibold w-full text-lg">
                    <div>
                        <label for="password">Senha</label>            
                    </div>
                    <input type="password" id="password" v-model="password" placeholder="Senha" class="w-full p-1 font-thin text-black border border-gray-300 bg-white text-md rounded focus:outline-none" @keypress.enter="login()" :class="{'border-red-500': error != ''}">
                </div>
                <div class="static font-normal text-md text-red-800" > {{error}} </div>

                <input type="button" value="Entrar" class="w-full relative p-1 bg-blue-700 text-white font-semibold rounded cursor-pointer" :class="{'mt-4': error.length == 0}" @click="login()">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            error: '',
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            this.$axios('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/login', {email: this.email, password: this.password})
                    .then((res) => {
                        this.$emit('update:user', res.data.user)
                        localStorage.token = res.data.token
                        localStorage.user = JSON.stringify(res.data.user)
                        this.$axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
                        this.$router.push('/home')
                    })
                    .catch(err => {
                        this.error = err  
                    })
            })
            
        }
    }
}
</script>

<style>

</style>