<template>
    <high-charts class="h-64 relative" :options="getOptions()" />
</template>

<script>
import Highcharts from 'highcharts'
import {Chart} from 'highcharts-vue'
import stockInit from 'highcharts/modules/stock';

stockInit(Highcharts);

export default {
    name: 'StockChart',
    components: {
        HighCharts: Chart
    },
    props: {
        chartData: {
            type: Array,
            default: () => []
        },
        company: {
            type: String,
            default: ''
        }
    },
    methods: {
        getOptions () {
                return {
                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: `${this.company} Stock Price`
                },

                tooltip: {
                    formatter: function () {
                        return this.point.toolTip
                    }
                },

                xAxis: {
                    tickInterval: 1,
                    categories: this.chartData.map((el) => { return el.date }),
                    labels: {
                        enabled: true
                    }
                },

                series: [{
                    name: `Stock Price`,
                    data: this.chartData.map(el => { return {
                        y: el.open,
                        toolTip: this.createToolTip(el),
                        interest: el.interest}
                    }),
                    marker: {
                        enabled: true,
                        radius: 3
                    },
                    shadow: true,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            }
        },

        createToolTip (el) {
            let toolTip = ''
            toolTip = `<b>${el.label}</b><br/>` +
                 `Change: <b>${el.change}</b><br/>` +
                 `Change %: <b>${el.changePercent}</b><br/>` +
                 `Close: <b>${el.close}</b><br/>` +
                 `High: <b>${el.high}</b><br/>` +
                 `Low: <b>${el.low}</b><br/>` +
                 `Open: <b>${el.open}</b><br/>`
            return toolTip
        }
    }
}
</script>

<style scoped>

</style>