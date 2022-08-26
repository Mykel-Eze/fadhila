<template>
  <div>
    <nav class="main-nav">
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo" @click="scrollToTop()">
            <img src="../assets/images/fadhila-logo.png" alt="Fadhila" class="logo">
          </router-link>

          <ul id="nav-mobile-2" class="dn-mobile ul-nav">
            <li>
              <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                <img src="../assets/images/menu.svg" alt="menu">
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li @click="scrollToTop()">
              <router-link to="/" class="">
                <span>HOME</span>
              </router-link>
            </li>
            <li @click="scrollToTop()">
              <router-link to="/about" class="">
                <span>ABOUT</span>
              </router-link>
            </li>
            <li @click="scrollToTop()">
              <router-link to="/about#our-services" class="">
                <span>SERVICES</span>
              </router-link>
            </li>
            <!-- <li>
                        <router-link to="/careers" class="" @click="scrollToTop()">
                            <span>CAREERS</span>
                        </router-link>
                    </li> -->
            <li class="contact-us-li">
              <a href="#partner-form-modal" class="modal-trigger" @click="scrollToTop()">
                <button class="nav-pry-btn btn pointer">
                  <span>Become a Partner</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <ul id="slide-out" class="sidenav">
      <div class="sidenav-logo" @click="scrollToTop()">
        <router-link to="/" class="sidenav-close">
          <img src="../assets/images/fadhila-logo.png" alt="Fadhila" class="logo">
        </router-link>
      </div>
      <li @click="scrollToTop()">
        <router-link to="/" class="sidenav-close">
          <span>Home</span>
        </router-link>
      </li>
      <li @click="scrollToTop()">
        <router-link to="/about" class="sidenav-close">
          <span>About</span>
        </router-link>
      </li>
      <li @click="scrollToTop()">
        <router-link to="/about#our-services" class="sidenav-close">
          <span>Services</span>
        </router-link>
      </li>
      <!-- <li>
            <router-link to="/careers" class="sidenav-close" @click="scrollToTop()">
                <span>Careers</span>
            </router-link>
        </li> -->
      <li class="contact-us-li">
        <a href="#partner-form-modal" class="sidenav-close modal-trigger" @click="scrollToTop()">
          <button class="nav-pry-btn btn pointer">
            <span>Become a Partner</span>
          </button>
        </a>
      </li>
    </ul>

    <PartnerFormModal />
  </div>
</template>

<script>
import PartnerFormModal from './PartnerFormModal.vue'
// import $ from "jquery";

export default {
  name: 'NavBar',
  components: { PartnerFormModal },
  mounted () {
    const M = require('materialize-css')
    const elemsSidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elemsSidenav)

    const elemsModal = document.querySelectorAll('.modal')
    M.Modal.init(elemsModal)
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped src="..\assets\css\navbar.css"></style>
