<template>
  <div class="wrap">
    <div class="left">
      <Variants :products="products" :productsTitle="productsTitle" />
      <Form />
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
    };
  },
  created() {
    (this.productsTitle = {
      img: "products",
      title: "CoreProduct",
      quantaty: 3,
      price: 39.99,
    }),
      (this.products = [
        {
          id: 1,
          imgId: 1,
          name: "CoreProduct",
          price: 49.99,
          quantaty: 3,
        },
        {
          id: 2,
          imgId: 1,
          name: "CoreProduct",
          price: 29.99,
          quantaty: 3,
        },
        {
          id: 3,
          imgId: 1,
          name: "CoreProduct",
          price: 29.99,
          quantaty: 3,
        },
      ]);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");
body {
  * {
    font-family: "Roboto", sans-serif;
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
      height: 100vh;
      padding-top: 68px;
      flex-basis: 59.16%;
      background-color: #f8f1eb;
      display: flex;
      flex-direction: column;
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
      }
      .right {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        padding: 30px 30px;
        background-color: #f8f1eb;
        flex-basis: 0;
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
