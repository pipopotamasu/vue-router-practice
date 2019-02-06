<template>
  <div class="container">
    <div class="tabs">
      <TabItem
        :id="1"
        :label="'Tab1'"
        :currentId="currentId"
        :key="1"
        @switch-tab="onSwitchTab" />
      <TabItem
        :id="2"
        :label="'Tab2'"
        :currentId="currentId"
        :key="2"
         @switch-tab="onSwitchTab" />
    </div>
    <div class="contents">
      <section class="item" :key="currentId" v-show="currentId === 1">
        Tab1が選択中
      </section>
      <section class="item" :key="currentId" v-show="currentId === 2">
        Tab2が選択中
      </section>
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
      currentId: 1
    }
  },
  methods: {
    onSwitchTab (id) {
      this.currentId = id;
    }
  }
}
</script>