<template>
  <div>
    <div class="overflow-hidden">
      <div class="w-full py-24 px-12 md:px-0 md:ml-24">
        <div class="block w-full">
          <VueSlickCarousel v-bind="settings" class="block h-full">
            <div class="bg-wrap">
              <div class="box">
                <div class="p-8">
                  <div class="w-full h-full bg-sq-image realwork"></div>
                  <div class="py-8">
                    <h2 class="tenez text-4xl text-center mb-4">Realwork</h2>
                    <a
                      href="https://www.doreal.work/"
                      target="_blank"
                      class="live-site"
                    >
                      <p class="sofia light text-center tracking-wide px-4">
                        Squarespace site development + custom CSS & JS injection
                      </p>
                      <p
                        class="sofia text-center tracking-wide px-4 mt-2 text-sm medium"
                      >
                        visit live site
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-wrap">
              <div class="box">
                <div class="p-8">
                  <div class="w-full h-full bg-sq-image bodhi"></div>

                  <div class="py-8">
                    <h2 class="tenez text-4xl text-center mb-4">
                      Bodhi &amp; Ivy
                    </h2>
                    <a
                      href="https://bodhi-and-ivy-skincare.myshopify.com/password"
                      target="_blank"
                      class="live-site"
                    >
                      <p class="sofia light text-center tracking-wide px-4">
                        Shopify e-commerce design + website template build
                      </p>
                      <p
                        class="sofia text-center tracking-wide px-4 mt-2 text-sm medium"
                      >
                        visit live site
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-wrap">
              <div class="box">
                <div class="p-8">
                  <div
                    class="w-full h-full bg-sq-image inspiration-spaces"
                  ></div>
                  <div class="py-8">
                    <h2 class="tenez text-4xl text-center mb-4">
                      Inspiration Spaces
                    </h2>
                    <a
                      href="https://www.theinspirationspace.co/"
                      target="_blank"
                      class="live-site"
                    >
                      <p class="sofia light text-center tracking-wide px-4">
                        Squarespace website with custom CSS & JS injection
                      </p>
                      <p
                        class="sofia text-center tracking-wide px-4 mt-2 text-sm medium"
                      >
                        visit live site
                      </p></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-wrap">
              <div class="box">
                <div class="p-8">
                  <div class="w-full h-full bg-sq-image olysheet"></div>
                  <div class="py-8">
                    <h2 class="tenez text-4xl text-center mb-4">Oly Sheet</h2>
                    <a
                      href="https://www.olysheet.com/"
                      target="_blank"
                      class="live-site"
                    >
                      <p class="sofia light text-center tracking-wide px-4">
                        NuxtJS website with Strapi API & headless CMS
                        integration
                      </p>
                      <p
                        class="sofia text-center tracking-wide px-4 mt-2 text-sm medium"
                      >
                        visit live site
                      </p></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-wrap">
              <div class="box">
                <div class="p-8">
                  <div class="w-full h-full bg-sq-image thegate"></div>
                  <div class="py-8">
                    <h2 class="tenez text-4xl text-center mb-4">
                      The Gate London
                    </h2>
                    <a
                      href="https://london.thegateworldwide.com/"
                      target="_blank"
                      class="live-site"
                    >
                      <p class="sofia light text-center tracking-wide px-4">
                        Squarespace custom build for digital agency in London
                      </p>
                      <p
                        class="sofia text-center tracking-wide px-4 mt-2 text-sm medium"
                      >
                        visit live site
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-wrap">
              <div class="box">
                <div class="p-8">
                  <div class="w-full h-full bg-sq-image beliza"></div>
                  <div class="py-8">
                    <h2 class="tenez text-4xl text-center mb-4">
                      Atelier Beliza
                    </h2>
                    <a
                      href="https://atelierbeliza.webflow.io/"
                      target="_blank"
                      class="live-site"
                    >
                      <p class="sofia light text-center tracking-wide px-4">
                        Wedding websites shop built in Webflow + Shopify
                        integration
                      </p>
                      <p
                        class="sofia text-center tracking-wide px-4 mt-2 text-sm medium"
                      >
                        visit live site
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        touchThreshold: 500,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
.pb-full {
  padding-bottom: 100%;
}
div[data-v-e4caeaf8] {
  display: flex !important;
  flex-direction: column !important;
  height: 100% !important;
  align-items: stretch !important;
}
</style>
