<template>
  <!-- Modal Structure -->
  <div id="partner-form-modal" class="modal">
    <div class="modal-content">
      <img src="../assets/images/modal-close.svg" alt="modal-close" class="modal-close">
      <div class="modal-form-wrapper row">
        <div class="col s12">
          <h4 class="modal-form-title">
            Interested in reaching out?
          </h4>
          <p class="modal-form-desc">
            Please reach out to us if you're interested in partnering with us or learning a little bit more about what we do.
          </p>
        </div>
        <form action="#" class="modal-form col s12 pad0">
          <div class="input-field col s12 m6">
            <input id="first_name" type="text" class="inp-form-field">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s12 m6">
            <input id="last_name" type="text" class="inp-form-field">
            <label for="last_name">Last Name</label>
          </div>
          <div class="input-field col s12">
            <input id="email_address" type="email" class="inp-form-field">
            <label for="email_address">Email Address</label>
          </div>
          <div class="input-field col s12">
            <input id="subject" type="text" class="inp-form-field">
            <label for="subject">Subject</label>
          </div>
          <div class="input-field col s12">
            <textarea id="message" class="materialize-textarea inp-form-field" />
            <label for="message">Write your message</label>
          </div>

          <div class="col s12 submit-btn-wrapper">
            <button class="submit-btn btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerFormModal',
  mounted () {
    const M = require('materialize-css')
    const elemsModal = document.querySelectorAll('.modal')
    M.Modal.init(elemsModal)
  }
}
</script>

<style scoped>
div#partner-form-modal {
    max-height: 80%;
    max-width: 700px;
    background: #F4FBFD;
    border-radius: 64px;
}
div#partner-form-modal::-webkit-scrollbar {
    display: none;
}
img.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
}
.modal-form-wrapper {
    padding: 20px;
    margin-top: 20px;
}
h4.modal-form-title {
    font-family: var(--sec-font-bold);
    font-size: 40px;
    margin: 0;
}
p.modal-form-desc {
    margin: 5px 0;
    font-size: 18px;
    line-height: 27px;
    color: #777777;
}
#partner-form-modal input.inp-form-field,
#partner-form-modal textarea.inp-form-field {
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 10px;
    height: 56px;
    box-shadow: none;
    padding: 0 15px;
}
#partner-form-modal textarea.inp-form-field {
    height: auto;
    min-height: 120px;
}
.input-field.col label {
    left: 1.75rem;
    top: 5px;
    font-size: 14px;
}
.input-field>label:not(.label-icon).active {
    top: 0;
}
button.submit-btn.btn {
    width: 100%;
    font-size: 18px;
    line-height: 23px;
    box-shadow: none;
    height: 46px;
    background: var(--pry-color);
    border-radius: 8px;
    margin-top: 20px;
}
@media(min-width: 993px) {
    div#partner-form-modal {
        width: 50%;
    }
}
@media(max-width: 600px) {
    div#partner-form-modal {
        border-radius: 22px;
    }
    h4.modal-form-title {
        font-size: 32px;
    }
    .input-field.col.s12 {
        margin: 5px 0;
    }
    .modal-form-wrapper {
        padding: 20px 0;
        margin-top: 10px;
    }
    p.modal-form-desc {
        font-size: 16px;
    }
    form.modal-form {
        margin-top: 15px;
    }
}
</style>
