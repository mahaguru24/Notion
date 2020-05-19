<template>
    <div>
        <stock-chart :chart-data="companyData['chart']" :company="company"/>
    </div>
</template>

<script>
import StockChart from './StockChart'
export default {
    name: 'RenderCompany',
    components: {StockChart},
    props: {
        company: {
            type: String,
            default: ''
        },
        companyData: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>

</style>