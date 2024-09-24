<script setup lang="ts">
import { useExampleStore } from '@/stores/Example/GetExample'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia';

const ExampleStore = useExampleStore()
const { example } = storeToRefs(ExampleStore)

onMounted(() => {
    ExampleStore.getExample()
})

</script>

<template>
    <div class=" tw-flex tw-min-h-screen tw-justify-center tw-items-center">
        <h1 class=" tw-font-bold tw-text-2xl"></h1>
        <v-table>
            <thead>
                <tr>

                    <th class="text-left">
                        Title
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="examples in example">

                    <td>{{ examples.title }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>

</template>