<template>
    <section class="page__search search">
        <div class="search__container _container">
            <h1 class="search__title">Заинтересовались?</h1>
            <p class="search__text">Укажите предполагаемые даты поездки, <br> и мы покажем вам лучшие предложения гостиниц в седоне</p>
            <button type="submit" class="search__button">Поиск гостиницы в Седоне</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.search {

		&__container {
            padding: 58px 15px 0 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
		}

		&__title {
            font-weight: 700;
            font-size: 30px;
            line-height: 24px;
                text-align: center;
		}

		&__text {
            text-align: center;
            line-height: 24px;
		}
		

		&__button {
            @include button;
             background-color: $bcButtonDark;
             padding: 30px 50px;
             font-size: 21px;
             line-height: 26px;
             min-height: 86px;
             text-transform: uppercase;
            &:hover {
              background-color: $buttonHoverDark;
            }
            &:active {
             @include active;
             background-color: $buttonActiveDark;
            }
		}
}


</style>