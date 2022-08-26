<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="home">
      <div class="row full-height rel">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="home-title pry-color">
                Agricultural solutions to help farmers increase their outputs per unit
              </h1>
              <p class="home-title-desc">
                Fadhila leverages digital agricultural solutions to build, scale and improve the yield and livelihood
                of farmers, by providing farmers with opportunities.
              </p>
              <nuxt-link to="/about">
                <button class="learn-more-btn hover-scale">
                  Learn More
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <img src="../assets/images/home-img-2.png" alt="farming woman" class="home-section-img full-width">
      </div>
    </section>
    <!--=== end of Home Section ===-->

    <!--=== Why-We-Exist Section ===-->
    <section id="why-we-exist">
      <div class="row">
        <div class="container">
          <div class="col s12 pad0">
            <div class="wwe-img-side col s12 m6">
              <img src="../assets/images/spraying-pesticide.png" alt="farmer spraying pesticide" class="wwe-img" data-aos="fade-up">
            </div>
            <div class="wwe-txt-side col s12 m6">
              <h4 class="wwe-txt-title pry-color">
                Why we exist
              </h4>
              <p class="wwe-txt-desc">
                We are a ‘total farm solution’ company that is dedicated to improving the output and competitiveness of
                African farmers by providing the right mix of quality agro-inputs through knowledge, innovation and partnerships,
                in the most convenient and efficient ways.
              </p>
              <div class="learn-more-btn-wrapper">
                <nuxt-link to="/about">
                  <button class="learn-more-btn hover-scale">
                    Learn More
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Why-We-Exist Section ===-->

    <!--=== Problems-And-Solutions Section ===-->
    <section id="problems-and-solutions">
      <img src="../assets/images/green-curvy-line-1.svg" alt="curvy line" class="green-curvy-line gcl-1">
      <img src="../assets/images/green-curvy-line-2.svg" alt="curvy line" class="green-curvy-line gcl-2">
      <img src="../assets/images/white-curvy-line-1.svg" alt="curvy line" class="white-curvy-line wcl-1">
      <img src="../assets/images/white-curvy-line-2.svg" alt="curvy line" class="white-curvy-line wcl-2">
      <div class="row">
        <div class="container">
          <div class="unique-sections-wrapper rel">
            <div class="tabs-nav-wrapper">
              <ul class="tabs">
                <li class="tab">
                  <a id="u-p-trigger" class="active" href="#unique-problems" @click="removeActiveGreenBg()">Unique Food Production Problems</a>
                </li>
                <li class="tab">
                  <a id="u-s-trigger" href="#unique-solutions" @click="addActiveGreenBg()">Our Unique Solution</a>
                </li>
              </ul>
            </div>

            <div id="unique-problems" class="">
              <div class="u-p-refrence-wrapper">
                <div class="u-p-refrence-block" data-aos="fade-up" data-aos-delay="50">
                  <img src="../assets/images/problem-1.svg" alt="refrence-img" class="refrence-block-img">
                  <div class="reference-block-desc">
                    <p>
                      The prevalence of moderate or severe food insecurity in Sub-Saharan Africa is almost at 60% of the entire
                      population, which is caused by climate changes and economic shocks.
                    </p>
                    <small class="pry-color refrenced-from">(FAO, 2019)</small>
                  </div>
                </div>

                <div class="u-p-refrence-block" data-aos="fade-up" data-aos-delay="100">
                  <img src="../assets/images/problem-2.svg" alt="refrence-img" class="refrence-block-img">
                  <div class="reference-block-desc">
                    <p>
                      African farmers are constrained by access to quality inputs as well as pest and disease prevalence.
                      (Pradhan P, et.al,2015) In essence, the use of the right inputs (Seeds, Plant nutrition products e.t.c)
                      among others is a Climate change Adaptation strategy.
                    </p>
                    <small class="pry-color refrenced-from">(PNAS December 11, 2007)</small>
                  </div>
                </div>

                <div class="u-p-refrence-block" data-aos="fade-up" data-aos-delay="150">
                  <img src="../assets/images/problem-3.svg" alt="refrence-img" class="refrence-block-img">
                  <div class="reference-block-desc">
                    <p>
                      Most African countries could be food sufficient by adapting to available high-input agriculture practices
                      in the present cultivated land with the present cropping patterns to achieve the crop potential yield
                      (which today stood at 40%) and consequently closed the yield gap.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="unique-solutions" class="col s12">
              <div class="u-s-block-wrapper rel">
                <div class="u-s-block" data-aos="fade-up">
                  <div id="u-s-block-1" class="u-s-block-img-wrapper" />
                  <div class="u-s-block-desc">
                    <b class="u-s-block-title">Quality products at competitive prices</b>
                    <p>
                      Our Strategic relationships with MNCs of repute and logistics companies enable us to
                      supply huge volumes of products in record time.
                    </p>
                  </div>
                </div>

                <div class="u-s-block" data-aos="fade-up">
                  <div id="u-s-block-2" class="u-s-block-img-wrapper" />
                  <div class="u-s-block-desc">
                    <b class="u-s-block-title">Quality and right input-mix</b>
                    <p>
                      We provide seeds, Fertilizers/Biostimulants and Agrochemicals for farmers.
                    </p>
                  </div>
                </div>

                <div class="u-s-block" data-aos="fade-up">
                  <div id="u-s-block-3" class="u-s-block-img-wrapper" />
                  <div class="u-s-block-desc">
                    <b class="u-s-block-title">Trainings</b>
                    <p>
                      We provide trainings on Good Agricultural/Agronomic practices, responsible and proper
                      use of tools /application of inputs and products etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Problems-And-Solutions Section ===-->

    <!--=== Gallery-Arts Section ===-->
    <section id="gallery-arts">
      <div class="row">
        <div class="container">
          <!-- <img src="../assets/images/gallery-img.png" alt="gallery-img" class="galllery-art full-width"> -->
          <div class="grid-img-wrapper">
            <div class="grid-img-block">
              <img src="../assets/images/grid-img-1.png" alt="grid image" class="gird-img" data-aos="fade-down-right" data-aos-delay="100">
              <img src="../assets/images/grid-img-2.png" alt="grid image" class="gird-img" data-aos="fade-up-right" data-aos-delay="100">
            </div>
            <div class="grid-img-block">
              <img src="../assets/images/grid-img-3.png" alt="grid image" class="gird-img" data-aos="fade-down" data-aos-delay="200">
              <img src="../assets/images/grid-img-4.png" alt="grid image" class="gird-img" data-aos="fade-up" data-aos-delay="200">
            </div>
            <div class="grid-img-block">
              <img src="../assets/images/grid-img-5.png" alt="grid image" class="gird-img" data-aos="fade-down" data-aos-delay="200">
              <img src="../assets/images/grid-img-6.png" alt="grid image" class="gird-img" data-aos="fade-up" data-aos-delay="200">
            </div>
            <div class="grid-img-block">
              <img src="../assets/images/grid-img-7.png" alt="grid image" class="gird-img" data-aos="fade-down-left" data-aos-delay="100">
              <img src="../assets/images/grid-img-8.png" alt="grid image" class="gird-img" data-aos="fade-up-left" data-aos-delay="100">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Gallery-Arts Section ===-->

    <!--=== Our-Brands Section ===-->
    <section id="our-brands">
      <div class="row">
        <div class="container*">
          <div class="section-header center">
            <h4 class="section-title">
              Our Brands of Fadhila
            </h4>
            <hr class="section-title-hr">
          </div>
          <div class="brands-container-wrapper hidden-xs">
            <div class="brands-block-wrapper">
              <div class="brand-block">
                <img src="../assets/images/brands/zabi.png" alt="zabi" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mai-mai.png" alt="mai mai" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mai-adawa.png" alt="mai adawa" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/herbicide.png" alt="fadhila herbicide" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/maza-maza.png" alt="maza maza" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/kiza.png" alt="kiza" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/na-kwaya.png" alt="na-kwaya" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mazi-zabe.png" alt="mai-zabe" class="brand-block-logo">
              </div>
            </div>
            <div class="brands-block-wrapper">
              <div class="brand-block">
                <img src="../assets/images/brands/zabi.png" alt="zabi" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mai-mai.png" alt="mai mai" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mai-adawa.png" alt="mai adawa" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/herbicide.png" alt="fadhila herbicide" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/maza-maza.png" alt="maza maza" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/kiza.png" alt="kiza" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/na-kwaya.png" alt="na-kwaya" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mazi-zabe.png" alt="mai-zabe" class="brand-block-logo">
              </div>
            </div>
          </div>
          <div class="brands-container-wrapper-2 visible-xs">
            <div class="brands-block-wrapper-2">
              <div class="brand-block">
                <img src="../assets/images/brands/zabi.png" alt="zabi" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mai-mai.png" alt="mai mai" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mai-adawa.png" alt="mai adawa" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/herbicide.png" alt="fadhila herbicide" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/maza-maza.png" alt="maza maza" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/kiza.png" alt="kiza" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/na-kwaya.png" alt="na-kwaya" class="brand-block-logo">
              </div>
              <div class="brand-block">
                <img src="../assets/images/brands/mazi-zabe.png" alt="mai-zabe" class="brand-block-logo">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Our-Brands Section ===-->

    <section class="spacing-section" />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'HomePage',
  layout: 'default',
  mounted () {
    const M = require('materialize-css')
    const elemsTab = document.querySelectorAll('.tabs')
    M.Tabs.init(elemsTab)

    AOS.init()
  },
  methods: {
    addActiveGreenBg () {
      document.querySelector('#problems-and-solutions').classList.add('active-green-bg')
    },
    removeActiveGreenBg () {
      document.querySelector('#problems-and-solutions').classList.remove('active-green-bg')
    }
  }
}
</script>

<style src="../assets/css/home.css"></style>

<style scoped>
#main-wrapper {
  width: 100%;
  overflow-x: hidden;
}
#u-s-block-1 {
  background-image: url(../assets/images/solution-1.png);
}
#u-s-block-2 {
  background-image: url(../assets/images/solution-2.png);
}
#u-s-block-3 {
  background-image: url(../assets/images/solution-3.png);
}
</style>
