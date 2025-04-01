<template>
    <v-container>
        <h1 class="text-2xl mb-6">{{ $t('math.title') }}</h1>
        <v-row class="mt-4 xl:w-2/3">
            <v-col cols="12" sm="6">
                <v-text-field 
                    v-model.number="number1"
                    :label="$t('math.varX')"
                    type="number">
                </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field
                    v-model.number="number2"
                    :label="$t('math.varY')"
                    type="number">
                </v-text-field>
            </v-col>
        </v-row>
        <h2 class="text-2xl my-6">{{ $t('math.result') }}</h2>
        <v-row class="mt-4 xl:w-2/3">
            <v-col cols="12" sm="6">
                <v-text-field
                    v-model.number="number1"
                    :label="$t('math.results.addition')"
                    :model-value="results.addition"
                    readonly>
                </v-text-field>
                <v-text-field 
                    v-model.number="number1"
                    :label="$t('math.results.subtraction')"
                    :model-value="results.subtraction"
                    readonly>
                </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field
                    v-model.number="number1"
                    :label="$t('math.results.multiplication')"
                    :model-value="results.multiplication"
                    readonly>
                </v-text-field>
                <v-text-field 
                    v-model.number="number1"
                    :label="$t('math.results.division')"
                    :model-value="results.division"
                    readonly>
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { computed } from 'vue';
    import { useI18n } from "vue-i18n";
    
    const { t } = useI18n();
    const number1 = ref(0);
    const number2 = ref(0);

    const formatNumber = (value) => {
        return new Intl.NumberFormat('pl-PL', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3,
        }).format(value);
    };

    const results = computed(() => {
        const num1 = Number(number1.value);
        const num2 = Number(number2.value);
        return {
            addition: formatNumber(num1 + num2),
            subtraction: formatNumber(num1 - num2),
            multiplication: formatNumber(num1 * num2),
            division: num2 !== 0 ? formatNumber(num1 / num2) : 'Nie dziel przez 0'
        };
    });
</script>