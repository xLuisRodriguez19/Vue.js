<template>
  <div class="h-screen flex flex-col bg-cyan-light overflow-y-auto">
    <Header class="flex-shrink-0">

    </Header>
    <div class="flex-grow container mx-auto max-w-6xl mt-10 space-y-6">
      <!--
      <div class="flex items-center justify-center space-x-2 text-5xl font-medium">
        <FaIcon :icon="['fab', 'linux']"/>
        <div>Hello Flisol 2022</div>
      </div>
       
      <p>
        Nombre:
        <input type="text" v-model="name" id="name">
      </p>

      <p>
        Apellido:
        <input type="text" v-model="lastName" id="ape">
      </p>

      <p>
        {{name }} {{lastName}}
      </p>
      
      <h1> 
        {{completo}}
      </h1>

      <h1>
        La suma es: {{sumar()}}
      </h1>

      <p>
        <button @click="suma">Agregar 1</button>
      </p>
      -->

      <div class="bg-white p-4 flex gap-2 rounded-lg">
        <div v-for="f of filtros" class="text-xs text-cyan-base bg-cyan-light rounded flex items-center overflow-hidden">
          <div class="pl-2">{{f}}</div>
          <div @click="quitarFiltro(f)" class="bg-cyan-base text-white hover:text-white hover:bg-black cursor-pointer p-1 ml-2">x</div>
        </div>
      </div>

      <div v-for="job of resultadoFiltro" class="bg-white p-4 flex gap-4 rounded-lg relative overflow-hidden">

        <div v-if="job.featured" class="w-1 h-full bg-cyan-base absolute top-0 left-0 ">

        </div>
        
        <div><img :src="job.logo" alt=""></div>
        
        <div class="flex-grow">
          <div class="flex items-center gap-2">
          <div class="text-cyan-base font-medium">{{job.company}}</div>
          <div v-if="job.new" class="text-tiny text-white bg-cyan-base rounded-full px-4 uppercase">New</div>
          <div v-if="job.featured" class="text-tiny text-white bg-black rounded-full px-4 uppercase">Featured</div>
        </div>
        <div class="font-medium text-lg">
          <div class="text-black ">{{job.position}}</div>
        </div>
        <div class="flex gap-4 text-sm text-gray-500">
          <div class="font-medium">{{job.postedAt}}</div>
          <div>-</div>
          <div class="font-medium">{{job.contract}}</div>
          <div>-</div>
          <div class="font-medium">{{job.location}}</div>
        </div>
        </div>

        <div class="flex items-start gap-2 ">
          <div v-for="len of job.languages" class="text-tiny text-cyan-base bg-cyan-light rounded px-4 hover:bg-cyan-base hover:text-white cursor-pointer" @click="filtro(len)">
            {{len}}
          </div>
        </div>
      
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios'
import { defineComponent } from "vue";


export default defineComponent({
  name: 'App',
  components: { Header },
  data: function () {
    return {
      /*name: 0,
      lastName: 0,
      sua : 0 */
      ofertas: [],
      filtros: []
    }
  },
  mounted() {
    this.getOfertas()
  },
  computed: {
    direccion() {
      return this.calle + " " + this.colonia
    },
    completo() {
      //return this.name + " " + this.lastName+" - "+this.direccion
      //return this.name + " " + this.lastName
    },

    resultadoFiltro(){
      if(this.filtros.length === 0){
        return this.ofertas
      }


      const filtrados = []
      for(const ofer of this.ofertas){
        for(const len of ofer.languages){
          if(this.filtros.includes(len)){
            filtrados.push(ofer)
            break
          }
        }
      }
      return filtrados
      //return this.ofertas.filter(fil => {return ofertas.languaje.some(languaje => this.filtros.includes(languaje))})
    }
  },
  methods: {
    async getOfertas() {
      const jobs = await axios.get('/api/jobs')
      this.ofertas = jobs.data
    },

    filtro(languaje){
      if (!this.filtros.includes(languaje)){
        this.filtros.push(languaje)
      }
    },
    quitarFiltro(len){
      const index = this.filtros.indexOf(len)
      this.filtros.splice(index, 1)
    }
  }
})
</script>