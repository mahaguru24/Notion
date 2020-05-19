<template>
  <div id="app" class="">
    <div class="container mx-auto p-4 py-10 md:p-10">
      <logo class="h-12 md:h-24 mx-auto"/>
<!--      <search-text-box class="mt-6 md:max-w-4xl mx-auto" />-->


      <div class="flex justify-around mt-8">

        <company
                class="h-28 w-30 text-center border p-4 px-8 rounded-lg cursor-pointer hover:shadow-lg"
                :class="{'border-orange-400': selected === company.code, 'text-orange-400': selected === company.code}"
                v-for="(company, index) in companies"
                :key="index"
                :img="company.img"
                :name="company.name"
                @click="fetchCompanyData(company.code)"
        />
      </div>

      <transition
              name="custom-classes-transition"
              enter-active-class="animated fadeIn"
      >

        <loader
                class=""
                v-if="loading"
        />

        <render-company
                v-else
                :company="selected"
                :companyData="companyData"
        />

      </transition>
    </div>
  </div>

</template>

<script>

import Logo from './components/Logo'
import RenderCompany from './components/RenderCompany'
import Company from './components/Company'
import CompaniesService from './services/CompaniesService'
import Loader from './components/Loader'
export default {
  name: 'App',
  components: {
    Loader,
    Company,
    RenderCompany,
    Logo
  },

  data () {
    return {
      companies: [
        {img: 'https://img.icons8.com/material/96/000000/mac-client.png', code: 'aapl', name: 'Apple'},
        {img: 'https://img.icons8.com/material/96/000000/facebook-new.png', code: 'fb', name: 'FB'}
      ],
      selected: '',
      loading: true,
      companyData: {}
    }
  },

  created () {
    this.fetchCompanyData(this.companies[0]['code'])
  },

  methods: {
    fetchCompanyData (company) {
      this.selected = company
      this.loading = true
      CompaniesService.getCompany(company)
      .then(res => {
        this.loading = false
        console.log(res.data)
        this.companyData = res.data
      })
      .catch(err => {
        this.loading = false
        throw err
      })

    }
  }
}
</script>

<style>
</style>
