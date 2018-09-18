<template>
  <div class="month-widget">
    <router-link :to="{ name: 'month', params: {
      year: month.format('YYYY'),
      month: month.format('MM')
    }}">
      <h3>{{ month.format('MMMM') }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'month-widget',
  props: {
    month: String,
  },
}
</script>

<style>
.month-widget {
  flex-basis: 21%;
  min-height: 250px;
  border: 1px solid #d5d5d5;
  margin-bottom: 15px;
}
</style>
