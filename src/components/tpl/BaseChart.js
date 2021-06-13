import config from "@/config";

const base = {
    data() {
        return {
            ...config,
            baseOption: {
                darkMode: this.darkMode,
                tooltip: {}
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
        if (this.darkMode) {
            this.panel.style.background = 'grey'
        }
    }

}

export default base;
