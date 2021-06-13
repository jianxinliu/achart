<template>
  <div id="app">
    <p>achart examples</p>
    <fieldset>
      <legend>Radar</legend>
      <radar title="Radar" :dimensions="radarIndicator" circle darkMode startAngle="-30"
             :seriesMap="radarData" :ring="{inner: '10%', outer: 140}"></radar>
    </fieldset>

    <fieldset>
      <legend>Pie</legend>
    </fieldset>
  </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            Radar: () => import('./components/charts/Radar/Radar')
        },
        data() {
            return {
                radarIndicator: [
                    {name: '语文', max: 150},
                    {name: '数学', max: 150},
                    {name: '英语', max: 150},
                    {name: '物理', max: 100},
                    {name: '化学', max: 100},
                    {name: '生物', max: 100}
                ],
                radarData: {
                    '男平均分': [95, 130, 120, 90, 89, 95],
                    '女平均分': [110, 120, 140, 85, 89, 90]
                }
            }
        }
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  p {
    text-align: center;
    font-weight: bold;
  }

  fieldset {
    border: 2px solid lightgrey;
    margin: 20px auto;
    height: 440px;
    width: 680px;
  }

  fieldset legend {
    font-weight: bold;
  }
</style>
