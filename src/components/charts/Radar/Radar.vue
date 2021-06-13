<template>
  <div :id="id" :style="{width: width, height: height, ...panel.style}"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import RadarSetting from './RadarSetting'

    export default {
        name: "Radar",
        mixins: [RadarSetting],
        data() {
            return {
                option: {},
            }
        },
        methods: {
            dealSeries(option = {}) {
                let series = Object.keys(this.seriesMap).map(ser => {
                    return {
                        name: ser,
                        value: this.seriesMap[ser]
                    }
                })
                option.series = {
                    type: this.type,
                    data: series
                }
                return option
            },

            dealLegend(option = {}) {
                const names = option.series.data.map(v => v.name)
                option.legend = {
                    data: names
                }
            }
        },
        mounted() {
            this.propsCheck()
            let option = {
                ...this.baseOption,
                radar: this.radar,
                title: {
                    text: this.title
                },
            }
            if (this.hasSeries) {
                this.dealSeries(option)
                this.dealLegend(option)
            }
            this.option = option
            const echartInstance = echarts.init(document.getElementById(this.id))
            echartInstance.setOption(this.option)
        }
    }
</script>

<style scoped>

</style>
