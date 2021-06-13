// const enableShape = ['polygon', 'circle']

import BaseChart from '../../tpl/BaseChart'

const setting = {
    data() {
        return {
            id: '__radar_chart__',
            type: 'radar',
            hasSeries: false,
            hasDimensions: false,
            radius: ['0%', '75%'],
            shape: 'polygon',
        }
    },
    computed: {
        radar() {
            return {
                shape: this.shape,
                radius: this.radius,
                startAngle: this.startAngle,
                indicator: this.dimensions
            }
        }
    },
    mixins: [BaseChart],
    props: {
        /**
         * 指示器(分析维度)，是一个数组， 每个元素可包含如下属性：
         * name, 非必选， 指示器的名称
         * min, 非必选，该指示器的最小值，默认为 0
         * max, 非必选，该指示器的最大值，尽量指定，否则自动选择依附在该指示器上的最大值
         * color, 非必选，指示器颜色
         */
        dimensions: {
            type: Array,
            required: true
        },

        // ----------------------------- 选配 --------------------------------- //

        /**
         * 设置雷达图的形状为圆形。默认多边形。
         */
        circle: {
            type: Boolean,
            default: false
        },

        /**
         * 圆环半径配置，单位自定义， 像素可用数字指定，百分比可用字符指定
         */
        ring: {
            default: () => ({inner: '0%', outer: '75%'}),
            type: Object,
            validator(value) {
                let {inner, outer} = value
                if (!inner && !outer) {
                    return false
                }
                outer = parseFloat(outer)
                inner = parseFloat(inner)
                const success = (!isNaN(inner) && inner >= 0) || (!isNaN(outer) && outer >= 0)
                if (!success) {
                    throw new Error('【Radar】【ring】输入必须是正数或正的百分比！')
                }
                return true
            }
        },

        /**
         * 第一个指示器的偏移角度
         */
        startAngle: {
            type: Number | String,
            default: 90,
            validator(value) {
                const fail = isNaN(parseFloat(value))
                if (fail) {
                    throw new Error('【Radar】【startAngle】角度值必须是数值型')
                }
                return true
            }
        }


        /**
         * 用于指定给定 series 中属性用于哪些作用
         * valueKey, 指定哪个字段的值作为数据，必须是数值型
         * nameKey, 指定哪个字段的值作为序列名称，以及 legend 名称
         */
        // valueKey: {
        //     type: String,
        //     default: 'value'
        // },
        // nameKey: {
        //     type: String,
        //     default: 'name'
        // }
    },
    methods: {
        propsCheck() {
            // radar series 可为空
            this.hasSeries = !!this.seriesMap
            if (!this.dimensions) {
                throw new Error("请指定值展示的维度（dimensions）！")
            }
            this.hasDimensions = true
            return true
        },

        dealRadius() {
            const {inner, outer} = this.ring
            let radius = []
            radius[0] = inner || '0%'
            radius[1] = outer || '75%'
            this.radius = radius
        },
    },
    mounted() {
        this.dealRadius()
        if (this.circle) {
            this.shape = 'circle'
        }
    }
}

export default setting
