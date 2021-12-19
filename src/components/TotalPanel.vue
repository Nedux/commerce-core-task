<template>
  <div class="wrapper">
    <div class="products-title">
      <div class="name">
        <img :src="getImg(productsTitle.img)" />
        <span class="bold">{{ `${productsTitle.quantaty}x` }}</span>
        <span>&nbsp;{{ productsTitle.title }} </span>
      </div>
      <div class="price">
        <span>{{ `$${productsTitle.price}` }}</span>
      </div>
    </div>
    <div class="total">
      <div>
        <span class="total-text">Total</span>
      </div>
      <div>
        <span class="bold small-text">USD </span>
        <span class="bold big-text">{{ `$${productsTitle.price}` }}</span>
      </div>
    </div>
    <div class="return">
      <div class="return-title">
        <img src="@/assets/images/return.svg" />
        <div class="bold">60-DAY FIT GUARANTEE</div>
      </div>
      <p>
        Either it doesn’t fit or simply you don’t like it You can return it
        within 60 days for a full refund. No questions asked.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalPanel",
  props: {
    productsTitle: Object,
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
.wrapper {
  max-width: 374px;

  background-color: white;
  .products-title {
    margin-bottom: 27px;
    display: flex;
    justify-content: space-between;
    .name {
      display: inline-block;
      img {
        margin-right: 14px;
      }
      span {
        font-size: 16px;
        line-height: 26px;
        vertical-align: middle;
      }
    }
    .price {
      display: flex;
      align-items: center;
    }
  }
  .total {
    padding-top: 24px;
    margin-bottom: 26px;
    border-top: #e0e0e0 solid 1px;
    display: flex;
    justify-content: space-between;
    .total-text {
      color: #828282;
      font-size: 18px;
      line-height: 24px;
    }
    .small-text {
      font-size: 12px;
      line-height: 16px;
    }
    .big-text {
      font-size: 24px;
      line-height: 28px;
    }
  }
  .return {
    padding: 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid #e0e0e0;
    .return-title {
      img {
        margin-right: 24px;
      }
      div {
        display: inline-block;
      }
    }
    p {
      margin: 16px 0 0;
      color: #828282;
      font-size: 14px;
      line-height: 140%;
    }
  }
}
@media (max-width: 1024px) {
  .wrapper .products-title .price {
    display: none;
  }
}
@media (max-width: 768px) {
  .wrapper {
    padding: 24px;
    margin: 0;
    align-self: right;
    border: 1px solid #e9d6c5;
    box-sizing: border-box;
    border-radius: 6px;
  }
}
@media (max-width: 575.98px) {
  .wrapper {
    padding: 24px;
    margin: auto;
    .products-title {
      margin-bottom: 15px;
    }
    .total {
      padding-top: 15px;
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 350px) {
  .wrapper {
    .products-title {
      margin-bottom: 10px;
      .price {
        display: none;
      }
    }
    .total {
      padding-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
