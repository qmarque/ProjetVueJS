<template>
  <div>
    <!-- <div class="form">
      <input class="input" type="text" aria-label="Nom..." v-model="searchInput">
      <button @click="searchBeer()">Rechercher</button>
    </div>
    <div class="beerList">
      <div @click="dataBeer(b.id)" class="card" v-for="b in list" :key="b.id" aria-hidden="true">-->
         <h2 class="title">{{ this.data[0].name }}</h2>
        <img :src="this.data[0].image_url" alt="Img beer" />
        {{ this.data[0].description }}
        <!--<<img :src=" b.image_url" alt="Img beer" />
       </div>
    </div>
    <div id="paginate" class="paginate">
      <p>
        <a @click="displayPage1()" aria-hidden="true">1</a>
        <a> | </a>
        <a @click="displayPage2()" aria-hidden="true">2</a>
      </p>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DataBeer',
  props: {
    msg: String,
  },
  data() {
    return {
      data: [],
    };
  },

  async mounted() {
    const id = document.location.href.split('beer/')[1];
    const result = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
    this.data = result.data;
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
