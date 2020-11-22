<template>
    <div class="">

    
    <table class="min-w-full divide-y divide-gray-200">
        <thead>
        <tr>
            <th scope="col" class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                De
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Para
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Km
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Valor
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 whitespace-nowrap text-sm font-medium">

            </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div>
                    {{from.name}}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div>
                    {{to.name}}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{distance}}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {{value}}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">

            </td>
        </tr>

        </tbody>
    </table>
        <div class="flex mt-5">
            <a href="#" class="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 mr-3" @click="save">Confirmar</a>
            <a href="#" class="bg-red-500 text-white p-1 rounded hover:bg-red-600"  @click="$emit('toggle', true)">editar</a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        to: Object,
        from: Object,
        distance: Number,
        value: String,
    },
    methods: {
        save() {
            console.log(JSON.parse(localStorage.user).id)
            this.$axios.post('/api/travel/', {
                "user_id": JSON.parse(localStorage.user).id,
                "from_id": this.from.id,
                "to_id": this.to.id,
                "km": this.distance,
                "value": parseFloat(this.value),
            })
                .then(res => {
                    this.$emit('toggle', true)
                    alert('Cadastrado com sucesso');
                })
        },
    }
}
</script>

<style>

</style>