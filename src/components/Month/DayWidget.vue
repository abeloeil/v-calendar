<template>
  <div class="day">
    <div @click="modalShow = !modalShow" class="clickable">
      <small>{{ day.format('ddd') }}</small>
      <h4 :class="{active: isActive}">
        {{ day.format('DD') }}
      </h4>
    </div>
    <b-modal
      v-model="modalShow"
      title="Add a new event"
      hide-footer
    >
      <event-form />
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment';
import EventForm from '@/components/Event/Form.vue';

export default {
  name: 'day-widget',
  props: {
    day: Object,
  },
  components: { EventForm },
  data() {
    return {
      modalShow: false,
    };
  },
  computed: {
    isActive() {
      return this.day.format('YYYYMMDD') === moment().format('YYYYMMDD');
    }
  },
}
</script>

<style lang="scss">
.day {
  .active {
    background-color: #0000AA;
    color: #fff;
    border-radius: 5px;
  }
  .clickable {
    cursor: pointer;
  }
}
</style>
