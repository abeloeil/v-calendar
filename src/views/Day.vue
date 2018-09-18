<template>
  <div>
    {{ $route.params.year }} - {{ $route.params.month }} - {{ $route.params.day }}
  </div>
</template>

<script>
export default {
  name: 'day-view',
}
</script>
