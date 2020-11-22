<template>
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
        <tbody class="bg-white divide-y divide-gray-200 text-center">
        <tr v-for="(travel, index) in travels" :key="index" >
            <td class="px-6 py-4 whitespace-nowrap">
                <div>
                    {{travel.from.name}}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div>
                    {{travel.to.name}}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{travel.km}}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {{travel.value}} R$
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">

            </td>
        </tr>

        </tbody>
    </table>
</template>

<script>
export default {
    props:['travels'],
}
</script>

<style>

</style>