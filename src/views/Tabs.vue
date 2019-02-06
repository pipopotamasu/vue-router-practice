<template>
  <div class="container">
    <div class="tabs">
      <TabItem 
        v-for="(tab, index) in tabs"
        :label="tab.label"
        :active="active(tab, index)"
        :key="index"
        @switch-tab="onSwitchTab(tab)"
      />
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
  data () {
    return {
      tabs: [
        { label: 'Tab1', route: 'tab1' },
        { label: 'Tab2', route: 'tab2' }
      ]
    }
  },
  methods: {
    onSwitchTab (tab) {
      this.$router.push({ path: `/tabs/${tab.route}` })
    },
    active (tab, index) {
      if (this.$route.path === '/tabs' || this.$route.path === '/tabs/') {
        return index === 0
      } else {
        return this.$route.path.includes(tab.route)
      }
    }
  }
}
</script>