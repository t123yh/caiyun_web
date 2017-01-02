<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
      <span class="info-box-icon" v-bind:class="[bgcolor]"> <i class="fa" v-bind:class="[icon]"></i> </span>
      <div class="info-box-content"><span class="info-box-text"> {{ title }}</span> <span class="info-box-number">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  props: ['title', 'description', 'icon', 'bgcolor'],
};
</script>
