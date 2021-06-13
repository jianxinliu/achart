import config from "@/config";

const base = {
    data() {
        return {
            ...config,
            baseOption: {
                tooltip: {},
                legend: {}
            }
        }
    },
    props: {
        seriesMap: {
            type: Object,
            default: null
        },
        title: {
            type: String
        },
        darkMode: {
            type: Boolean
        }
    },
    methods: {},
    mounted() {
    }

}

export default base;
