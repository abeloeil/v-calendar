<template>
  <div>
    <month
      :year="$route.params.year"
      :month="$route.params.month"
    />
  </div>
</template>

<script>
import Month from '@/components/Month/Month.vue';

export default {
  name: 'month-view',
  components: { Month }
};
</script>
