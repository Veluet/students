<template>
  <!-- <div class="grid grid-cols-3 gap-4">
      <div v-for="item in items" :key="item.id" class="shadow-sm">
      <h2>{{ item.title }}</h2>
      <p>{{ item.desc }}</p>
    </div>
  </div> -->
  <div class="auto-grid">
    <div
      v-for="year in years"
      :key="year"
      class="
        auto-grid-item
        text-secondary-600
        rounded-md
        border-2 border-secondary-500
        p-1
        md:border-none md:bg-secondary-500 md:text-gray-50 md:p-3 md:flex
        items-center
        gap-3
        w-160
      "
    >
      <router-link
        :to="{
          name: 'summarize',
          params: {
            year: year,
          },
        }"
        class="md:whitespace-nowrap"
      >
        <div>
          <h3>{{ year }}</h3>
        </div>
        <div>
          <span class="bold">Attendence: </span>
          <span>{{ yearRows[year].attendence }}</span>
        </div>
        <div>
          <span class="bold">Overall GPA: </span>
          <span>{{ yearRows[year].averageGPA }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
.auto-grid {
  display: grid;
  counter-reset: grid-items;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.auto-grid-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  name: "schoolYears",
  props: {
    years: Array,
    yearRows: Object,
  },
};
</script>
