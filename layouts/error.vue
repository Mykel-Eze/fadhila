<template>
  <div id="main-wrapper">
    <section class="error-container">
      <div class="row">
        <div class="container">
          <div class="error-block center">
            <div v-if="error.statusCode === 404" class="error-404">
              <img src="../assets/images/error-404.svg" alt="error 404" class="error-code-img">
              <p class="error-description">
                Page not found
              </p>
            </div>
            <div v-else class="other-errors-mssg">
              <h1 class="other-error-title">
                An error occured
              </h1>
            </div>
            <div class="error-action-btn-wrapper">
              <router-link v-slot="{ navigate }" to="/" custom>
                <button class="error-action-btn hover-scale" role="link" @click="navigate">
                  Take me back home
                  <img src="../assets/images/right-chevron.svg" alt="right" class="right-chevron">
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'default',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style scoped>
.error-block {
    padding: 15px;
}
h1.error-page-title {
    letter-spacing: -1px;
}
img.error-code-img {
    margin: 20px 0;
}
p.error-description {
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    color: #6E7883;
}
.error-action-btn-wrapper {
    margin: 30px 0;
}
button.error-action-btn {
    background: #25A9E0;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: white;
    height: 50px;
    width: 220px;
    cursor: pointer;
}
h1.other-error-title {
    color: var(--sec-color);
    font-size: 5.2rem;
}
@media(min-height: 960px) {
    .error-container {
        min-height: 50vh;
    }
    /* .error-block {
        position: relative;
        top: 10vh;
    } */
    h1.other-error-title {
      color: var(--sec-color);
      font-size: 4.2rem;
    }
}
</style>
