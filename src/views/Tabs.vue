<template>
  <div class="container">
    <div class="tabs">
      <TabItem
        :label="'Tab1'"
        :active="!$route.fullPath.includes('tab2')"
        :key="1"
        @switch-tab="onSwitchTab" />
      <TabItem
        :label="'Tab2'"
        :active="$route.fullPath.includes('tab2')"
        :key="2"
        @switch-tab="onSwitchTab" />
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TabItem from '../components/TabItem.vue'

export default {
  components: {
    TabItem
  },
  methods: {
    onSwitchTab (tab) {
      if (tab === 'Tab1') {
        this.$router.push({ path: '/tabs/tab1' })
      } else {
        this.$router.push({ path: '/tabs/tab2' })
      }
    }
  }
}
</script>