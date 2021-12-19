<template>
  <div class="form">
    <p class="colored">PAYMENT AND SHIPPING</p>
    <div class="wrapper">
      <div class="customer-info">
        <div class="title">
          <p class="information">Customer Information</p>
          <p class="requirements">Fields marked as (*) are required.</p>
        </div>
        <div class="inputs">
          <div class="name">
            <!-- @input is needed because of information autofill and use of tabs -->
            <input
              :class="`form-control ${errors.name.visible ? 'active' : ''}`"
              type="Text"
              placeholder="*First name"
              v-model="userInfo.name"
              :maxlength="maxOther"
              @click="removeError('name')"
              @input="removeError('name')"
            />
            <p :class="`error ${errors.name.visible ? 'active' : ''}`">
              {{ errors.name.errormsg }}
            </p>
          </div>

          <div class="last-name">
            <input
              :class="`form-control ${errors.lastName.visible ? 'active' : ''}`"
              type="Text"
              placeholder="*Last name"
              v-model="userInfo.lastName"
              :maxlength="maxOther"
              @click="removeError('lastName')"
              @input="removeError('lastName')"
            />
            <p :class="`error ${errors.lastName.visible ? 'active' : ''}`">
              {{ errors.lastName.errormsg }}
            </p>
          </div>
          <div class="email">
            <input
              :class="`form-control ${errors.email.visible ? 'active' : ''}`"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="*Email"
              v-model="userInfo.email"
              :maxlength="maxOther"
              @click="removeError('email')"
              @input="removeError('email')"
            />
            <p :class="`error ${errors.email.visible ? 'active' : ''}`">
              {{ errors.email.errormsg }}
            </p>
          </div>
        </div>
      </div>
      <div class="shipping">
        <p class="information bold">Shipping Address</p>
        <div class="inputs">
          <div class="address">
            <input
              :class="`form-control ${errors.address.visible ? 'active' : ''}`"
              type="Text"
              placeholder="*Address"
              v-model="userInfo.address"
              :maxlength="maxOther"
              @click="removeError('address')"
              @input="removeError('address')"
            />
            <p :class="`error ${errors.address.visible ? 'active' : ''}`">
              {{ errors.address.errormsg }}
            </p>
          </div>
          <div></div>
          <div class="city">
            <input
              :class="`form-control ${errors.city.visible ? 'active' : ''}`"
              type="Text"
              placeholder="*City"
              v-model="userInfo.city"
              :maxlength="maxOther"
              @click="removeError('city')"
              @input="removeError('city')"
            />
            <p :class="`error ${errors.city.visible ? 'active' : ''}`">
              {{ errors.city.errormsg }}
            </p>
          </div>
          <div class="form-floating country">
            <select
              required
              :class="`form-select ${errors.country.visible ? 'active' : ''}`"
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/' + imageArrow) + ')',
              }"
              id="floatingSelect"
              v-model="userInfo.country"
              :maxlength="maxOther"
              @click="removeError('country')"
              @input="removeError('country')"
            >
              <option class="default" selected disabled value="">Select</option>

              <option
                v-for="country in countries"
                :key="country.id"
                :value="country.id"
              >
                {{ country.name }}
              </option>
            </select>
            <label class="bold" for="floatingSelect">*Country</label>
            <p :class="`error ${errors.country.visible ? 'active' : ''}`">
              {{ errors.country.errormsg }}
            </p>
          </div>
          <div class="form-floating region">
            <select
              required
              :class="`form-select ${errors.region.visible ? 'active' : ''}`"
              :style="{
                backgroundImage:
                  'url(' + require('@/assets/' + imageArrow) + ')',
              }"
              id="floatingSelect"
              v-model="userInfo.region"
              @click="removeError('region')"
              @input="removeError('region')"
            >
              <option class="default" selected disabled value="">Select</option>

              <option
                v-for="region in regions"
                :key="region.id"
                :value="region.id"
              >
                {{ region.name }}
              </option>
            </select>
            <label class="bold" for="floatingSelect">*Region/state</label>
            <p :class="`error ${errors.region.visible ? 'active' : ''}`">
              {{ errors.region.errormsg }}
            </p>
          </div>
          <div class="code">
            <input
              :class="`form-control ${
                errors.postalCode.visible ? 'active' : ''
              }`"
              type="Text"
              placeholder="*Postal code"
              v-model="userInfo.postalCode"
              :maxlength="maxPostal"
              @click="removeError('postalCode')"
              @input="removeError('postalCode')"
            />
            <p :class="`error ${errors.postalCode.visible ? 'active' : ''}`">
              {{ errors.postalCode.errormsg }}
            </p>
          </div>
        </div>
      </div>
      <div class="payment">
        <p class="information bold">Payment Method</p>
        <div class="secure">
          <img src="@/assets/images/lock.svg" />
          <span>All Transactions are secure and encrypted</span>
        </div>
        <div class="inputs">
          <div class="selected">
            <div class="credit-card">
              <img src="@/assets/images/selected.svg" />
              <span> Credit card </span>
            </div>
            <img class="cards-img" src="@/assets/images/cards.png" />
          </div>
          <div class="card-information">
            <div class="card-number">
              <input
                :class="`form-control ${
                  errors.cardNumber.visible ? 'active' : ''
                }`"
                :maxlength="maxCredit"
                type="text"
                placeholder="Card Number"
                v-model="userInfo.cardNumber"
                @click="removeError('cardNumber')"
                @input="
                  formatCredit($event);
                  removeError('cardNumber');
                "
              />
              <p :class="`error ${errors.cardNumber.visible ? 'active' : ''}`">
                {{ errors.cardNumber.errormsg }}
              </p>
            </div>
            <div class="expiration">
              <input
                :class="`form-control ${errors.mmyy.visible ? 'active' : ''}`"
                type="Text"
                placeholder="MM/YY"
                v-model="userInfo.mmyy"
                :maxlength="maxLengthExpiration"
                @click="removeError('mmyy')"
                @input="
                  onlyNumberAndSlash('mmyy');
                  removeError('mmyy');
                "
              />
              <p :class="`error ${errors.mmyy.visible ? 'active' : ''}`">
                {{ errors.mmyy.errormsg }}
              </p>
            </div>

            <div class="cvv">
              <input
                :class="`form-control ${errors.cvv.visible ? 'active' : ''}`"
                type="text"
                placeholder="CVV"
                v-model="userInfo.cvv"
                :maxlength="maxLengthCvv"
                :style="{
                  backgroundImage:
                    'url(' + require('@/assets/' + imageInfo) + ')',
                }"
                @click="removeError('cvv')"
                @input="
                  onlyNumbers('cvv');
                  removeError('cvv');
                "
              />
              <p :class="`error ${errors.cvv.visible ? 'active' : ''}`">
                {{ errors.cvv.errormsg }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="complete-button">
        <button @click="submitForm">
          <span class="bold">COMPLETE ORDER</span>
        </button>
      </div>
      <div class="security">
        <img src="@/assets/images/ultra-secure/nortonSecure.png" />
        <img src="@/assets/images/ultra-secure/veriSign.png" />
        <img src="@/assets/images/ultra-secure/mcAfee.png" />
        <img src="@/assets/images/ultra-secure/comodo.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  props: {
    countries: Array,
    regions: Array,
  },
  data() {
    return {
      maxLengthCvv: 3,
      maxLengthExpiration: 5,
      maxOther: 45,
      maxPostal: 10,
      maxCredit: 24,
      imageArrow: "images/form-arrow.svg",
      imageInfo: "images/info.svg",

      userInfo: {
        name: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        country: "",
        region: "",
        postalCode: "",
        cardNumber: "",
        mmyy: "",
        cvv: "",
      },

      errors: {
        name: {
          visible: false,
          errormsg: "",
        },
        lastName: {
          visible: false,
          errormsg: "",
        },
        email: {
          visible: false,
          errormsg: "",
        },
        address: {
          visible: false,
          errormsg: "",
        },
        city: {
          visible: false,
          errormsg: "",
        },
        country: {
          visible: false,
          errormsg: "",
        },
        region: {
          visible: false,
          errormsg: "",
        },
        postalCode: {
          visible: false,
          errormsg: "",
        },
        cardNumber: {
          visible: false,
          errormsg: "",
        },
        mmyy: {
          visible: false,
          errormsg: "",
        },
        cvv: {
          visible: false,
          errormsg: "",
        },
      },
    };
  },
  methods: {
    // Groups numbers by 4 digits
    formatCredit(event) {
      // If not backspace
      if (event.data) {
        this.onlyNumbers("cardNumber");
        if (isNaN(event.data)) {
          return;
        }
        let lastChar = this.userInfo.cardNumber.slice(-1);
        let temp = this.userInfo.cardNumber.slice(0, -1);
        let spacesCount = (temp.match(/ /g) || []).length;
        // For checking if space is required (when something is deleted)
        if (
          event.data != " " &&
          temp &&
          temp.length % 4 == spacesCount &&
          lastChar != " "
        ) {
          let lastChar2 = temp.slice(-1);
          if (lastChar2 != " ") {
            this.userInfo.cardNumber = temp + " " + lastChar;
          }
        } else {
          spacesCount = (this.userInfo.cardNumber.match(/ /g) || []).length;
          if (
            event.data != " " &&
            this.userInfo.cardNumber &&
            this.userInfo.cardNumber.length % 4 == spacesCount
          ) {
            this.userInfo.cardNumber += " ";
          }
        }
      } else {
        this.onlyNumbers("cardNumber");
      }
    },
    onlyNumbers(field) {
      let lastChar = this.userInfo[field].slice(-1);
      if (isNaN(lastChar) || lastChar == " ") {
        this.userInfo[field] = this.userInfo[field].slice(0, -1);
      }
    },
    onlyNumberAndSlash(field) {
      let lastChar = this.userInfo[field].slice(-1);
      if ((isNaN(lastChar) || lastChar == " ") && lastChar != "/") {
        this.userInfo[field] = this.userInfo[field].slice(0, -1);
      }
    },
    showError(field, msg) {
      this.errors[field].errormsg = msg;
      this.errors[field].visible = true;
    },
    removeError(field) {
      this.errors[field].visible = false;
    },
    submitForm() {
      let valid = true;
      Object.entries(this.userInfo).forEach(([key, value]) => {
        if (!value) {
          this.showError(key, "This field is empty!");
          valid = false;
        } else {
          this.removeError(key);
        }
      });
      // Expiration check
      let expiration = this.userInfo.mmyy;
      if (expiration) {
        let separator = expiration[2];
        let month = expiration.substring(0, 2);
        let year = expiration.substring(3, 5);
        if (
          expiration.length != 5 ||
          isNaN(year) ||
          isNaN(month) ||
          separator != "/"
        ) {
          this.showError("mmyy", "Invalid format!");
          valid = false;
        } else {
          year = parseInt(year) + 2000;
          month = parseInt(month) - 1;
          var currentDate = new Date();
          var expirationDate = new Date(year, month);
          if (currentDate >= expirationDate) {
            valid = false;
            this.showError("mmyy", "Expired card!");
          }
        }
      }
      // Cvv check
      let cvv = this.userInfo.cvv;
      if (cvv) {
        cvv = parseInt(cvv);
        if (cvv != 100) {
          this.showError("cvv", "Invalid CVV!");
          valid = false;
        }
      }
      if (valid) {
        this.$emit("form-submited", this.userInfo);
        // Clearing
        Object.entries(this.userInfo).forEach(([key, value]) => {
          this.userInfo[key] = "";
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  margin: 32px 0;
  max-width: 640px;
  .error {
    margin: 0;
    color: #ff0033;
    font-size: 12px;
    display: none;
  }
  .active {
    display: block !important;
  }
  .colored {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.07em;
    margin: 2px 0 0 0;
  }
  .information {
    font-size: 14px;
    line-height: 24px;
  }
  .wrapper {
    padding: 16px 24px 21px 24px;
    border: 1px solid #e9d6c5;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    background-color: white;
    flex-direction: column;
    input {
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 2px;
      font-family: Roboto, "sans-serif";

      box-sizing: border-box;
      border-radius: 3px;
      padding: 12px;
      height: 48px;
      font-size: 12px;
      line-height: 24px;
      &.active {
        border-color: #ff0033;
      }
    }
    ::placeholder {
      color: #bdbdbd;
    }
    .customer-info {
      .title {
        .information {
          font-size: 14px;
          margin-bottom: 4px;
          font-weight: 600;
          line-height: 140%;
        }
        .requirements {
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          color: #bdbdbd;
        }
      }
      .inputs {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 18px;
        .name,
        .last-name {
          flex-basis: 48.9%;
        }
        .email {
          margin-top: 16px;
          flex-basis: 100%;
        }
      }
    }
    .shipping {
      margin-bottom: 9px;
      .information {
        margin-bottom: 16px;
      }
      .inputs {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
          margin-bottom: 16px;
        }
        .address,
        .city {
          flex-basis: 100%;
        }
        .country,
        .region {
          margin: 0;
          flex-basis: 34.3%;
          select {
            color: #bdbdbd;
            height: 48px;
            padding: 13px 36px 0 12px;
            font-size: 12px;
            font-family: Roboto, sans-serif;
            > .default {
              display: none;
            }
            &:valid {
              color: #333333;
            }
            &.active {
              border-color: #ff0033;
            }
          }
          label {
            font-family: Roboto, "sans-serif";
            font-size: 12px;
            line-height: 16px;
            color: #828282;
            padding: 15px 0 12px 12px;
          }
        }
        .code {
          margin: 0;
          flex-basis: 26.5%;
        }
      }
    }
    .payment {
      .information {
        margin: 0;
      }
      .secure {
        margin-bottom: 15.2px;
        span {
          margin-left: 4px;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          color: #bdbdbd;
        }
      }
      .inputs {
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        border-radius: 6px;
        display: flex;
        flex-wrap: wrap;
        .selected {
          padding: 17px 16.11px 16px 16px;
          flex-basis: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding-bottom: 15.56px;
          > img {
            margin-right: 1px;
          }
          .credit-card {
            font-size: 14px;
            height: 20px;
            img {
              margin: 0 8px 0 1px;
              height: 20px;
            }
            span {
              vertical-align: middle;
            }
          }
        }
        .card-information {
          padding: 17px 15px 16px;
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          padding-top: 17px;
          flex-basis: 100%;
          display: flex;
          flex-wrap: wrap;
          .card-number {
            flex-basis: 100%;
          }
          .expiration,
          .cvv {
            max-width: 112px;
          }
          .expiration {
            margin: 16px 16px 0 0;
          }
          .cvv {
            margin: 16px 0 0;
            input {
              background-repeat: no-repeat;
              background-position: 90% center;
            }
          }
        }
      }
    }
    .complete-button {
      margin-top: 29px;
      display: flex;
      button {
        height: 56px;
        border: none;
        flex-basis: 100%;
        background: #dc624e;
        box-shadow: none;
        box-shadow: 0px 4px 10px rgba(67, 40, 16, 0.24);
        border-radius: 3px;
        &:hover {
          opacity: 87%;
        }
        span {
          font-size: 14px;
          line-height: 24px;
          color: white;

          text-align: center;
          letter-spacing: 0.07em;
        }
      }
    }
    .security {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      img {
        margin-right: 4px;
      }
    }
  }
  // For removing default bootstrap styling
  textarea:focus,
  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="datetime"]:focus,
  input[type="datetime-local"]:focus,
  input[type="date"]:focus,
  input[type="month"]:focus,
  input[type="time"]:focus,
  input[type="week"]:focus,
  input[type="number"]:focus,
  input[type="email"]:focus,
  input[type="url"]:focus,
  input[type="search"]:focus,
  input[type="tel"]:focus,
  input[type="color"]:focus,
  select:focus,
  .uneditable-input:focus {
    border-color: rgba(47, 56, 65, 0.5);
    box-shadow: none;
    outline: 0 none;
  }
}
@media (max-width: 1030px) {
  div.form .wrapper .payment .inputs .selected {
    .credit-card {
      flex-basis: 100%;
    }
    > img {
      margin-top: 10px;
    }
  }
}
@media (max-width: 768px) {
  .form {
    margin: 32px 0 0;
    .wrapper {
      .customer-info .inputs {
        .name,
        .last-name {
          flex-basis: 47.5%;
        }
      }
      .shipping .inputs {
        .country,
        .region {
          flex-basis: 47.5%;
        }
        .code {
          flex-basis: 47.5%;
          margin-top: 16px;
        }
      }
      .security {
        margin-top: 50px;
      }
    }
  }
}
@media (max-width: 575.98px) {
  .form .wrapper .security :last-child {
    margin-top: 5px;
  }
}
@media (max-width: 350px) {
  .form .wrapper {
    .customer-info .inputs {
      .name,
      .last-name {
        flex-basis: 100%;
      }
      .name {
        margin-bottom: 16px;
      }
    }
    .payment .inputs .selected {
      .cards-img {
        display: none;
      }
    }
  }
}
</style>
