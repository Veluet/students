<template>
  <div>
    <h2 id="yearRow">Student GPAs for {{ year }}</h2>
    <div v-for="studentRow in studentRows" :key="studentRow">
      <div>
        <strong>{{ studentRow.Name }}:</strong> {{ studentRow.GPA }}
      </div>
    </div>
    <div class="my-2">
      <button
        @click.prevent="returnToTop"
        class="text-primary-500 md:invisible"
      >
        Back to Top!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "summarizeYear",
  data() {
    return {
      studentRows: {},
    };
  },
  props: {
    year: String,
    yearRows: Object,
  },
  updated() {
    this.studentRows = this.yearRows[this.year].studentRows;

    const element = document.querySelector("#yearRow");
    const topPos = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: topPos, // scroll so that the element is at the top of the view
      behavior: "smooth", // smooth scroll
    });
  },
  methods: {
    returnToTop() {
      const element = document.querySelector("#top");
      const topPos = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: "smooth", // smooth scroll
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
