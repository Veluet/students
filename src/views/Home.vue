<template>
  <div class="home container mx-auto px-4" id="{{duty}}">
    <main-header />
    <school-years class="my-5" />
    <router-view class="my-5" />
  </div>
</template>

<script>
import mainHeader from "../components/mainHeader";
import schoolYears from "../components/schoolYears";

export default {
  name: "Home",
  components: {
    mainHeader,
    schoolYears,
  },
};
</script>
