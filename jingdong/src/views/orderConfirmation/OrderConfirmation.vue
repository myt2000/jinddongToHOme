<template>
    <div class="wrapper">
        <div class="top">
            <div class="top__header">
                <div class="iconfont top__header__back">&#xe600;</div>
                确认订单
            </div>
            <div class="top__receiver">
                <div class="top__receiver__title">收货地址</div>
                <div class="top__receiver__address">
                    北京理工大学国防科技园2号楼10层
                </div>
                <div class="top__receiver__info">
                    <span class="top__receiver__info__name">吃瓜群众</span>
                    <span class="top__receiver__info__name">12456789</span>
                </div>
                <div class="iconfont top__receiver__icon">&#xe600;</div>
            </div>
        </div>
        <div class="products">
            <div class="products__title"></div>
            <div class="products__list"></div>
            <div class="product__item">
                <img class="product__item__img" src="123" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">番茄</h4>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen; 33.3</span>
                        <span class="product__item__yen">&yen; 99.9</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OrderConfirmation'
}
</script>

<style lang='scss' scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #eee;
}
.top {
    position: relative;
    height: 1.96rem;
    background-size: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(0, 145, 255, 0) 4%,
        #0091ff 50%
    );
    background-repeat: no-repeat;

    &__header {
        position: relative;
        padding-top: 0.26rem;
        line-height: 0.24rem;
        color: #fff;
        text-align: center;
        font-size: 0.16rem;
        &__back {
            position: absolute;
            font-size: 0.22rem;
            left: 0.18rem;
        }
    }
    &__receiver {
        position: absolute;
        left: 0.18rem;
        right: 0.18rem;
        bottom: 0;
        height: 1.11rem;
        background: #fff;
        border-radius: 0.04rem;
        &__title {
            line-height: 0.22rem;
            padding: 0.16rem 0 0.14rem 0.16rem;
            font-size: 0.16rem;
            color: #333;
        }
        &__address {
            line-height: 0.2rem;
            padding: 0 0.4rem 0 0.16rem;
            font-size: 0.14rem;
            color: #333;
        }
        &__info {
            padding: 0.06rem 0 0 0.16rem;
            &__name {
                margin-right: 0.06rem;
                line-height: 0.18rem;
                font-size: 0.12rem;
                color: #666;
            }
        }
        &__icon {
            transform: rotate(180deg);
            position: absolute;
            right: 0.16rem;
            top: 0.5rem;
            color: #666;
            font-size: 0.2rem;
        }
    }
}
.products {
    margin: .16rem .18rem 0.55rem .18rem;
    background: #fff;
    &__title {
    }
    &__list {
    }
    &__item {
        .product {
            overflow-y: scroll;
            flex: 1;
            &__item {
                position: relative;
                display: flex;
                padding: 0.12rem 0;
                margin: 0 0.16rem;
                border-bottom: 0.01rem solid $content-bgColor;
                &__detail {
                    overflow: hidden;
                }
                &__img {
                    width: 0.68rem;
                    height: 0.68rem;
                    margin-right: 0.16rem;
                }
                &__title {
                    margin: 0;
                    line-height: 0.2rem;
                    font-size: 0.14rem;
                    color: $content-fontcolor;
                    @include ellipsis;
                }

                &__price {
                    margin: 0;
                    line-height: 0.2rem;
                    font-size: 0.14rem;
                    color: $highlight-fontColor;
                }
                &__yen {
                    font-size: 0.12rem;
                }
            }
        }
    }
}
</style>
