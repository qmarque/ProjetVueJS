<template>
  <div class="root">
      <div class="card">
          <h1 class="title">{{ this.data[0].name }}</h1>
          <h2>{{ this.data[0].tagline }}</h2>
          <img :src="this.data[0].image_url" alt="Img beer" />
          <p clas="infos">
            {{ this.data[0].description }}<br /><br />
              Mash temperature :   {{ this.data[0].method.mash_temp[0].temp.value }} °C<br />
              Fermentation temperature :   {{ this.data[0].method.fermentation.temp.value }} °C<br /><br />
              <ul>
              Can be tasted with :
                <li>
                  {{ this.data[0].food_pairing[0] }}<br />
                </li>
                <li>
                  {{ this.data[0].food_pairing[1] }}<br />
                </li>
                <li>
                  {{ this.data[0].food_pairing[2] }}<br />
                </li>
                </ul>
          </p>
      </div>
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
.root {
  width: 50%;
  margin: 0 auto;
  background-color: beige;
  border-radius: 10px;
}

.card {
  padding-top: "20";
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h2 {
  font-style: italic;
  margin-top: 0;
  font-size: 15px;
}
.title {
  color: white;
  text-shadow: 0 2px 8px #223161;
  text-decoration: "none";
  text-transform: "capitalize";
}

img {
  width: 10%;
}

.infos{
  margin: 10px;
  text-align: center;
}
</style>
