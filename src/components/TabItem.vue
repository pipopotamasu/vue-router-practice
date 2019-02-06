<template>
  <button @click="$emit('switch-tab', label)" :class="[active ? 'active' : '', 'tab']">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    active: Boolean
  }
}
</script>

<style scoped>
.tab {
  border-radius: 2px 2px 0 0;
  background: #fff;
  color: #311d0a;
  line-height: 24px;
}
.tab:hover {
  background: #eeeeee;
}
.active {
  background: #f7c9c9;
}
</style>