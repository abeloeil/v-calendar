<template>
  <div class="year-widget">
    <month-widget
      v-for="month in months"
      :key="month.format('MM')"
      :month="month"
    />
  </div>
</template>

<script>
import moment from 'moment';
import { chunk } from 'lodash';
import MonthWidget from './MonthWidget.vue';

export default {
  name: 'year',
  computed: {
    months: function() {
      const month = [];
      for (let i = 0; i < 12; i++) {
        month.push(moment().month(i));
      }
      return month;
    }
  },
  components: { MonthWidget },
}
</script>

<style>
.year-widget {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
}
</style>
