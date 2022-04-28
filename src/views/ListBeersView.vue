<template>
  <div class="beers">
            <ListBeers
msg="Ma liste de bières"
:data="trans"
:total-pages="Math.ceil(trans.length / 8)"
:total="trans.length"
:per-page="8"
:current-page="currentPage"
@pagechanged="onPageChange"
/>
  </div>
</template>

<script>
import ListBeers from '@/components/ListBeers.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ListBeersView',
  components: {
    ListBeers,
  },
  mounted() {
    this.loadTrans();
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions(['loadTrans']),
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    ...mapGetters(['trans']),
  },
};
</script>
