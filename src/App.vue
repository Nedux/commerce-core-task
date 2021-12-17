<template>
  <div class="wrap">
    <div class="left">
      <Variants :products="products" :productsTitle="productsTitle" />
      <div class="mobile">
        <TotalPanel :productsTitle="productsTitle" />
      </div>
      <Form
        @form-submited="formSumbmited"
        :regions="regions"
        :countries="countries"
      />
    </div>
    <div class="right">
      <TotalPanel :productsTitle="productsTitle" />
    </div>
  </div>
</template>

<script>
import Variants from "./components/Variants";
import TotalPanel from "./components/TotalPanel";
import Form from "./components/Form";

export default {
  data() {
    return {};
  },
  name: "App",
  components: {
    Variants,
    TotalPanel,
    Form,
  },
  data() {
    return {
      products: [],
      productsTitle: {},
      regions: [
        {
          name: "Mock Region1",
          id: 1,
        },
        {
          name: "Mock Region2",
          id: 2,
        },
        {
          name: "Mock Region3",
          id: 3,
        },
        {
          name: "Mock Region4",
          id: 4,
        },
      ],
      countries: [
        {
          name: "Mock country",
          id: 1,
        },
        {
          name: "Mock country2",
          id: 2,
        },
        {
          name: "Mock country3",
          id: 3,
        },
        {
          name: "Mock country4",
          id: 4,
        },
      ],
    };
  },
  methods: {
    async formSumbmited(formData) {
      console.log(JSON.stringify(formData));
      const response = await fetch("api/userInfo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // Error checks needed
    },
    async fetchProducts() {
      const response = await fetch("api/products");
      const data = await response.json();
      return data;
      // Error checks needed
    },
    createTite(products) {
      let price = 0;
      let quantaty = 0;
      products.forEach((product) => {
        quantaty += product.quantaty;
        price += product.price;
      });
      return {
        img: "products",
        title: "CoreProduct",
        quantaty: quantaty,
        price: price,
      };
    },
  },
  async created() {
    (this.products = await this.fetchProducts()),
      (this.productsTitle = this.createTite(this.products));
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
body {
  * {
    font-family: "Roboto", sans-serif;
    color: #333333;
  }
  .bold {
    font-weight: 900;
  }
  .colored {
    color: #dc624e;
  }
  .wrap {
    display: flex;
    flex-direction: row;
    .left {
      min-height: 100vh;
      padding-bottom: 129px;
      padding-top: 68px;
      flex-basis: 59.16%;
      background-color: #f8f1eb;
      display: flex;
      flex-direction: column;
      .mobile {
        display: none;
      }
    }
    .right {
      padding-top: 88px;
      flex-basis: 40.83%;
      background-color: white;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}

@media (max-width: 768px) {
  body {
    background-color: #f8f1eb !important;
    .wrap {
      flex-direction: column;

      .left {
        padding: 30px 30px;

        .mobile {
          margin: 32px 0;
          display: flex;
          justify-content: flex-end;
        }
      }
      .right {
        display: none;
      }
    }
  }
}
@media (max-width: 575.98px) {
  body {
    background-color: #f8f1eb !important;
    .wrap {
      flex-direction: column;
      .left {
        padding: 30px 15px;
      }
      .right {
        padding: 30px 15px;
      }
    }
  }
}
</style>
