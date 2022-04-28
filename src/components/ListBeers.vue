<template>
  <div class="Beer">
     <div class="form">
      <input class="input" type="text" aria-label="Nom..." v-model="searchInput">
      <button @click="searchBeer()" class="buttonSearch">Rechercher</button>
    </div>
    <div class="form">
    <div class="containerRange">
      <div class="min-value numberVal">
        <input type="number" min="0" max="10000" value="2500" aria-label="true" disabled>
      </div>
      &nbsp; -
      <div class="range-slider">
        <div class="progress"></div>
        <input type="range" class="range-min" min="0" max="10000" aria-label="true" value="2500">
        <input type="range" class="range-max" min="0" max="10000" aria-label="true" value="7500">
      </div>
      -&nbsp;
      <div class="max-value numberVal">
        <input type="number" min="0" max="10000" value="7500" aria-label="true" disabled>
      </div>
    </div>
    </div>

    <div class="beerList">
      <div class="card" v-for="(beer, index) in paginatedData" :key="index">
        <router-link :to="{ name: 'beer', params: { id: beer.id } }">
          <h2 class="title">{{ beer.name }}</h2>
          <img :src="beer.image_url" alt="Img beer" />
        </router-link>
        </div>
        </div>

    <div id="paginate">
      <ul class="pagination" v-if="data.length > 5 || currentPage > 1">
        <li class="pagination-item" title="Первая страница">
          <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
            <!-- eslint-disable-next-line -->
            <<
          </button>
        </li>

        <li class="pagination-item" title="Предыдущая страница">
          <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
            <!-- eslint-disable-next-line -->
            <
          </button>
        </li>

        <li class="pagination-item" v-for="(page, index) in pages" :key="index">
          <button
          type="button"
          @click="onClickPage(page.number)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.number) }">
            {{ page.number }}
          </button>
        </li>

        <li class="pagination-item" title="Следующая страница">
          <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
            >
          </button>
        </li>
        <li class="pagination-item" title="Последняя страница">
          <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
            >>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBeersView',
  data() {
    return {
      list: [],
    };
  },
  props: {
    msg: String,
    data: {
      type: Array,
      required: true,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.data.slice(start, end);
    },
    startPage() {
      if (this.currentPage === 1) return 1;
      if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons - 1);
      return this.currentPage - 1;
    },
    endPage() { return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() { return this.currentPage === 1; },
    isInLastPage() { return this.currentPage === this.totalPages; },
  },
  methods: {
    searchBeer() {
      if (!this.searchInput) {
        alert('Veuillez rentrer le nom de la bière que vous recherchez...');
      }
      this.list = [];
      this.data.forEach((beer) => {
        if (beer.name.match(new RegExp(this.searchInput, 'i'))) {
          this.list.push(beer);
        }
      });
      if (this.list.length === 0) {
        alert('Aucune bière ne correpond à votre recherche ...');
      }
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>
<style scoped>
h1 {
  color: gray;
}

input {
  width: 40%;
  margin-right: 30px;
  border-radius: 50px;
}

.buttonSearch {
  margin: 0 10px;
  border-radius: 30px;
  background-color: gray;
  border: none;
  color: white;
}

.form{
  margin: 50px 10%;
  padding: 10px;
  background-color: beige;
  border-radius: 10px;
}

.beerList {
  background-color: beige;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 30px;
  justify-content: center;
  border-radius: 10px;
}

.card {
  border-radius: 10px;
  border: 2px solid gray;
  height: auto;
  width: 120px;
  margin: 10px;
  background: gray;
  color: white;
}

.title {
  font-size: 12px;
  text-align: center;
}

img {
  width: 60%;
}

a {
  text-decoration: none;
  color: white;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: auto 0 0 0;
  list-style-type: none;
}

button {
  margin: 0!important;
  padding: .25rem .5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: .25rem;
  background: none;
}

button[disabled="disabled"] {
  color: silver;
  cursor: default;
}

button:hover{
    cursor: default;
    background-color: transparent;
    color: black;
}

button.active {
  color: red;
}

.containerRange {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 50px;
  background: white;
  border-radius: 20px;
  margin: 0 auto;
}

.containerRange input[type="number"]{
  width: 80px;
  height: 30px;
  background: white;
  border: 1px solid #ddd;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
}

.containerRange input[type="number"]::-webkit-outer-spin-button,
.containerRange input[type="number"]::-webkit-inner-spin-button{
  -webkit-appearance: none;
}

.containerRange .range-slider{
  position: relative;
  width: 400px;
  height: 5px;
  background: #ddd;
  outline: none;
  top: 1px;
  margin: 10px;
}

.containerRange .range-slider .progress {
  left: 25%;
  right: 25%;
  height: 100%;
  background: #17a288;
  border-radius: 50px;
  position: absolute;
}

.containerRange .range-slider input[type="range"] {
  position: absolute;
  top: -8px;
  left: -5px;
  width: 100%;
  -webkit-appearance: none;
  pointer-events: none;
  background: none;
  outline: none;
}

.containerRange .range-slider input::-webkit-slider-thumb {
  pointer-events: auto;
  -webkit-appearance: none;
  width: 17px;
  height: 17px;
  background: #17a288;
  border-radius: 50px;
}
</style>
