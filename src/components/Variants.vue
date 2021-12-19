<template>
  <div class="variants">
    <p class="colored">VARIANTS</p>
    <div class="wrapper">
      <div
        class="btn"
        data-bs-target="#collapseTarget"
        data-bs-toggle="collapse"
      >
        <div class="products-title">
          <img :src="getImg(productsTitle.img)" />
          <span class="bold">{{ `${productsTitle.quantaty}x` }}</span>
          <span class="product-name">&nbsp;{{ productsTitle.title }} </span>
        </div>
        <div class="toggle">
          <div>
            <span class="bold colored">Change</span>
            <img src="@/assets/images/arrow.svg" />
          </div>
        </div>
      </div>
      <div class="collapse" id="collapseTarget">
        <div class="products">
          <div class="product" v-for="product in products" :key="product.id">
            <div>
              <img :src="getImg(product.imgId)" />
              <span class="bold">{{ `${product.quantaty}x` }}</span>
              <span> &nbsp;{{ product.name }} </span>
            </div>
            <div>
              <span class="bold">{{ `$${product.price}` }}</span>
            </div>
          </div>
        </div>
        <div class="save-button">
          <button data-bs-target="#collapseTarget" data-bs-toggle="collapse">
            <span class="bold">SAVE CHANGES</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Variants",
  props: {
    products: Array,
    productsTitle: Object,
  },
  data() {
    return {};
  },
  methods: {
    getImg(name) {
      if (name) {
        return require("@/assets/images/" + name + ".png");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.variants {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  max-width: 640px;
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.07em;
    margin: 2px 0 0 0;
  }

  .wrapper {
    background-color: white;
    border: 1px solid #e9d6c5;
    box-sizing: border-box;
    border-radius: 6px;

    .btn[aria-expanded="true"] {
      .toggle div {
        img {
          transform: rotate(360deg);
        }
      }
    }
    .btn {
      padding: 0;
      padding: 16px 30px 16px 24px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      line-height: 24px;
      .products-title {
        img {
          width: 40px;
          margin-right: 15px;
        }
        span {
          vertical-align: middle;
        }
      }
      .toggle {
        display: flex;
        align-items: center;
        span {
          line-height: 24px;
        }
        img {
          margin-left: 10px;
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
      }
    }
    .products {
      .product:nth-of-type(1) {
        border-top: 1px solid #f2f2f2;
        padding-top: 16px;
        margin-top: 0px;
      }
      .product {
        margin: 7px 30px 0 24px;
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
          img {
            margin-right: 15px;
          }
        }
      }
    }
    .save-button {
      padding: 23px 24px 24px 24px;
      display: flex;
      justify-content: flex-end;
      button {
        background-color: #dc624e;
        width: 246px;
        height: 48px;
        border: 1px solid black;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(67, 40, 16, 0.24);
        border-radius: 3px;
        opacity: 100%;
        transition: opacity 0.25s;
        &:hover {
          opacity: 87%;
        }
        span {
          letter-spacing: 0.07em;
          color: white;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .variants {
    margin: 0;
  }
}
@media (max-width: 575.98px) {
  .variants .wrapper {
    padding: 15px 24px 0;
    margin: auto;
  }
  .variants .wrapper .btn {
    padding: 0 0 15px;
  }
  .variants .wrapper .products .product {
    margin: 5px 0 0;
  }
  .variants .wrapper .save-button {
    justify-content: center;
    padding: 24px 0 15px;
  }
}
@media (max-width: 350px) {
  .variants .wrapper .btn {
    flex-direction: column;
    .toggle {
      justify-content: center;
    }
  }
}
</style>
