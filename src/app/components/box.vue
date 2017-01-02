<template>
  <div class="box" v-bind:class="classNames">
    <div class="box-header with-border" v-if="title">
      <h3 class="box-title">{{ title }}</h3>
      <div class="box-tools pull-right">
        <button class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse" v-if="collapsable"><i class="fa fa-minus"></i></button>
      </div>
    </div>
    <div class="box-body" v-if="hasSlot('body')">
      <slot name="body"></slot>
    </div>
    <div class="box-footer" v-if="hasSlot('footer')">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style>
</style>

<script>
import slotMixin from './../mixins/slot';

export default {
  mixins: [
    slotMixin,
  ],
  props: ['contextualStyle', 'title', 'collapsable'],
  computed: {
    classNames: function computeClassName() {
      if (this.contextualStyle) {
        return `box-${this.contextualStyle}`;
      }
      return 'box-default';
    },
  },
};
</script>

