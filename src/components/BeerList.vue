<template>
  <div class="Beer">
    <h1 title="Accueil"  @click="displayPage1()" aria-hidden="true">{{ msg }}</h1>
    <div class="form">
      <input class="input" type="text" aria-label="Nom..." v-model="searchInput">
      <button @click="searchBeer()">Rechercher</button>
    </div>
    <!-- <div class="beerList">
      <div @click="dataBeer(b.id)" class="card" v-for="b in list" :key="b.id" aria-hidden="true">
        <h2 class="title">{{ b.name }}</h2>
        <img :src=" b.image_url" alt="Img beer" />
      </div> -->
    <!-- </div> -->
    <div id="paginate" class="paginate">
      <p>
        <a @click="displayPage1()" aria-hidden="true">1</a>
        <a> | </a>
        <a @click="displayPage2()" aria-hidden="true">2</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BeerList',
  props: {
    msg: String,
  },
  data() {
    return {
      list: [],
      list1: [],
      list2: [],
      fullList: [],
      searchInput: '',
    };
  },

  async mounted() {
    const result = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=30');
    const result2 = await axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=30');
    this.list = result.data;
    this.list1 = result.data;
    this.list2 = result2.data;
    this.fullList = result.data.concat(result2.data);
  },

  methods: {
    searchBeer() {
      if (!this.searchInput) {
        alert('Veuillez rentrer le nom de la bière que vous recherchez...');
        return;
      }

      this.list = [];
      this.fullList.forEach((beer) => {
        if (beer.name.match(new RegExp(this.searchInput, 'i'))) {
          this.list.push(beer);
        }
      });
      if (this.list.length === 0) {
        alert('Aucune bière ne correpond à votre recherche ...');
        this.list = this.list1;
      }

      document.getElementById('paginate').style.display = 'none';
    },

    displayPage1() {
      this.searchInput = '';
      this.list = this.list1;
      document.getElementById('paginate').style.display = 'block';
    },

    displayPage2() {
      this.list = this.list2;
    },

    dataBeer(id) {
      alert(id);
    },
  },
};
</script>

<style scoped>
h1 {
  color: gray;
  cursor: grab;
}
input {
  width: 40%;
  margin-right: 30px;
  border-radius: 50px;
}
button {
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
</style>
