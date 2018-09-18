<template>
  <div class="month">
    <div class="week" v-for="(chunk, i) in days" :key="i">
      <day-widget
        v-for="day in chunk"
        :key="day"
        :day="getDate(day)"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { chunk } from 'lodash';
import DayWidget from './DayWidget.vue';

export default {
  name: 'month',
  components: { DayWidget },
  props: {
    year: String,
    month: String,
  },
  data() {
    return {
      days: [],
    };
  },
  created() {
    const date = moment(`${this.year}-${this.month}-01`);
    const days = [];

    for (let i = 1; i <= date.daysInMonth(); i++) {
      days.push(i);
    }

    this.days = chunk(days, 7);
  },
  methods: {
    getDate(day) {
      return moment(`${this.year}-${this.month}-${day}`);
    }
  }
}
</script>

<style lang="scss">
.month {
  display: table;
  width: 100%;

  .week {
    display: table-row;

    .day {
      display: table-cell;
      border: 1px solid #d5d5d5;
      height: 150px;
    }
  }
}
</style>
