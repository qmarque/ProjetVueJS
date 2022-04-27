<template>
  <div class="transactionsPaginated">
            <transactions-paginated
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
import TransactionsPaginated from '@/components/TransactionsPaginated.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TransactionsPaginatedView',
  components: {
    TransactionsPaginated,
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
