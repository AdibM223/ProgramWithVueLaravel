<script >
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ListWahana from './components/Main/ListWahana.vue'
import Promotion from './components/Main/Promotion.vue'
import Contact from './components/Main/Contact.vue'
export default{
  name:'Home',
  components:
  {
    Navbar,Footer,ListWahana,Promotion,Contact
  },
}
</script>

<template>
  <Navbar />
  <v-app id="home"  :style="{ background: $vuetify.theme.themes.default.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
        <v-img src="logo-dark.jpg" contain  max-height="600"></v-img>
      </v-col>
      <v-col cols="6">
        <h1 class="text-dark text-h1 " style="color: #f39f19; ;">SALOKA THEME PARK</h1>
        <p class="text-p " :style="{ color: $vuetify.theme.themes.green.background}">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"</p>
      <v-btn tile color="#f39f19" dark><RouterLink :to="{name:'AboutPages'}"> About Us</RouterLink></v-btn>
      </v-col>
      <ListWahana/>
      <Promotion/>

      <Contact/>
    </v-row>
    </v-container>
  </v-app>
  <Footer/>
</template>
<style scoped>


  .top{
    margin-top:20px;
  }

  .topInverse{
    margin-top:-250px;
  }

  .topTolbar{
    margin-top:100px;
    text-align: center;
  }

  .first{
    width: 100%;
    height: 610px;
    background: linear-gradient(
      to right,
      #181818 50%,
      #181818 50%,
      #181818 50%,
    );
    text-align: center;
    padding: 2rem 2rem;
  }

  .second{
    width: 100%;
    height: 400px;
   
    text-align: center;
    padding: 2rem 2rem;
  }

  .secondchild1{
    display: inline-block;
    background-color: #1e1e1e;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: left;
    margin-top: 250px;
  }

  .child{
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: left;
    margin-right: 8px;
  }

  .bgColor1{
    background-color: #1e1e1e;
  }

  .bgColor2{
    background-color: #ce1d2a;
  }

  .child1{
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    margin-right: 5px;
    width: 240px;
  }

  .child2{
    display: inline-block;
    width: 245px;
    vertical-align: middle;
  }

  .mRight{
    margin-right: 8px;
  }

  .mButton{
    margin-bottom: 8px;
  }

  .padding{
    padding: 8px 0px;
  }

  .col-12.padd{
    padding: 12px 0 !important;
  }

  .col-12.childcol{
    padding: 0 !important;
  }

  h1.number{
    font-size: 50px;
    font-weight: bold;
  }
</style>
