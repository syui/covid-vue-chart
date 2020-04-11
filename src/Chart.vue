<script>
import { Bar } from 'vue-chartjs';
import axios from 'axios';

export default {
  extends: Bar,
  name: 'chart',
  methods: {
  },
  created(){
      axios.get('https://raw.githubusercontent.com/pomber/covid19/master/docs/timeseries.json').then(response =>{
        this.data = response.data.Japan[0].date;
        this.labels = response.data.Japan[0].confirmed;
				console.log(response.data.Japan[0].date);
      })
	},
  data () {
    return {
      data: {
      labels : [],
      data: []
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.labels)
  },
}
</script>
