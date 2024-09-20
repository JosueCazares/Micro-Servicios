import { httpAPI } from '../../lib/api'; 
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { APIResponse, Example } from '@micro-servicio/api/types';

export const useExampleStore = defineStore('example', () => {
    const example = ref<Example[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<unknown>();

    const getExample = async () => {
        loading.value = true;

        try {
            

            const response = await httpAPI<APIResponse<Example[]>>('/example/','GET',undefined);
            if (response.status !== 'success') {
                console.error('Error en getExample =>', response.error);
                error.value = response.error;
                loading.value = false;
                return;
            }

            if (!response.data) {
                console.error('Error en getExample =>', response.error);
                error.value = response.error;
                loading.value = false;
                return;
            }
            example.value = response.data;
            loading.value = false;
        } catch (e) {
            console.error('Error en getExample =>', e);
            error.value = e;
            loading.value = false;
        }
    };

    return {
        example,
        error,
        loading,
        getExample
    };
});