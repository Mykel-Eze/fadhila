<template>
  <footer>
    <div class="row">
      <div class="container">
        <div class="footer-contents-wrapper">
          <div class="footer-content-block footer-logo-block">
            <router-link to="/" @click="scrollToTop()">
              <img src="../assets/images/fadhila-icon.png" alt="Fadhila" class="footer-logo">
            </router-link>
            <div class="footer-social-wrapper">
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/facebook.svg" alt="facebook" class="social-icons">
              </a>
              <!-- <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/images/instagram.svg" alt="instagram" class="social-icons">
                          </a> -->
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/twitter.svg" alt="twitter" class="social-icons">
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/instagram.svg" alt="instagram" class="social-icons">
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/linkedin.svg" alt="linkedin" class="social-icons">
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/youtube.svg" alt="youtube" class="social-icons">
              </a>
            </div>
          </div>
          <div class="footer-content-block">
            <h4 class="footer-sec-title">
              Headquarters
            </h4>
            <div class="footer-sec-content">
              836 Idris Ibrahim Crescent, Jabi, Abuja FCT, Nigeria.
            </div>
          </div>
          <div class="footer-content-block">
            <h4 class="footer-sec-title">
              General inquiries
            </h4>
            <div class="footer-sec-content">
              <div class="inq email-inq">
                <span>If it’s easier, email us?</span> <br>
                <a href="mailto:info@fadhilacropscience.com" class="">
                  <span>info@fadhilacropscience.com</span>
                </a> <br>
                <a href="tel:+2347034145958" class="flex-div">
                  <img src="../assets/images/tel.svg" alt="phone" class="tel-icon">
                  <span>+234 7034145958</span>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-content-block">
            <h4 class="footer-sec-title">
              Sign up for the newsletter
            </h4>
            <div class="footer-sec-content">
              <div class="subscribe-form-wrapper">
                <form id="newsletter-form" action="#">
                  <div class="flex-div input-field">
                    <input id="subscriber-email" placeholder="Enter your e-mail…" type="email" required>
                    <button class="btn subscribe-submit pry-bg">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-credit-wrapper">
        <div class="row">
          <div class="container">
            <div class="copyright-div">
              <p>
                This website uses <a href="/" target="_blank" rel="noopener noreferrer" class="pry-color">Cookies <span class="pp-font">↗</span></a>
                We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. The content on this website
                does not constitute a complete description of Fadhila Crop Sciences Limited. By using this website, you accept our
                <a href="/" target="_blank" rel="noopener noreferrer" class="pry-color">Terms of Use</a> and <a href="/" target="_blank" rel="noopener noreferrer" class="pry-color">Privacy Policy</a>.
              </p>
            </div>
            <div class="footer-sub-wrapper flex-div">
              <div>© 2022 Fadhila Crop Sciences Limited. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped src="..\assets\css\footer.css"></style>
