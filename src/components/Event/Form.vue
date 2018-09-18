<template>
  <b-form @submit="onSubmit">
    <b-form-group
      id="title"
      label="Title:"
      label-for="title"
    >
      <b-form-input
        id="tilte"
        v-model="form.title"
        required
        placeholder="Enter a title"
      />
    </b-form-group>
    <b-form-group
      id="startsAt"
      label="Starts At:"
      label-for="startsAt"
    >
      <b-form-input
        id="startsAt"
        type="time"
        v-model="form.startsAt"
        required
      />
    </b-form-group>
    <b-form-group
      id="endsAt"
      label="Ends At:"
      label-for="endsAt"
    >
      <b-form-input
        id="endsAt"
        type="time"
        v-model="form.endsAt"
        required
      />
    </b-form-group>
    <b-form-group
      id="description"
      label="Description (optionnal):"
      label-for="description"
    >
      <b-form-textarea
        id="description"
        v-model="form.description"
        required
        placeholder="Describe the event."
        rows="3"
      />
    </b-form-group>
    <b-form-group>
      <b-btn type="submit">Submit</b-btn>
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: 'event-form',
  props: {
    date: Object,
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        startsAt: null,
        endsAt: null,
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$store.dispatch('addEvent', {
        ...this.form,
        date: this.date,
      });
    }
  }
}
</script>
