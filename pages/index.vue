<template>
  <div class="w-full">
    <div>
      <h2
        class="objektiv light text-2xl text-center color-base p-8 py-14 uppercase tracking-wider"
      >
        izabela magiera
      </h2>
    </div>
    <div class="pr-12 md:pr-24">
      <div class="w-full relative bg-tan px-12 lg:pr-24 lg:pl-48">
        <div class="container mx-auto max-w-3xl px-8 pt-36 pb-4">
          <p
            class="sofia medium text-xs text-center regular tracking-wider mb-2 uppercase"
          >
            full Stack front-end developer
          </p>
          <p class="tenez text-center text-lrg">
            I code & build user centred websites and ecommerce shops with a
            strong focus on flawless functionality and improved SEO
          </p>
          <div
            class="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-lg mt-4 text-center"
          >
            <div class="my-2 block mx-auto w-24 text-center">
              <img src="logo-webflow-p-500.png" alt="" />
            </div>
            <div class="my-2 block mx-auto w-24 text-center">
              <img src="logo-squarespace-p-500.png" alt="" />
            </div>
            <div class="my-2 block mx-auto w-24 text-center">
              <img src="logo-shopify-p-500.png" alt="" />
            </div>
            <div class="my-2 block mx-auto w-24 text-center">
              <img src="logo-vue-p-500.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="anime" class="pr-12 md:pr-24 sticky top-0 z-50">
      <div class="w-full relative bg-tan pl-24 py-12 radius-br">
        <h2
          id="showLogo"
          class="objektiv light text-2xl text-center color-base uppercase tracking-wider -mt-1 opacity-0"
        >
          izabela magiera
        </h2>
        <imcrtv-logo class="logo-spin absolute bottom-0 right-0" />
        <imcrtv-text
          id="logoSpin"
          class="logo-spin absolute bottom-0 right-0"
        />
        <!-- <img
          class="absolute bottom-0 right-0 logo-spin"
          src="imcrtv-logo-txt.svg"
          alt=""
        /> -->
      </div>
    </div>
    <slickSlider />
    <!-- about me section -->
    <about />
    <!-- about me section -->

    <!-- Quote -->
    <div class="py-24 relative">
      <div class="absolute flex flex-row justify-center text-center w-full">
        <div class="container mx-auto w-28 block"><quoteIcon /></div>
      </div>
      <div class="px-12 md:px-24 mt-14">
        <div class="bg-tan px-11 md:px-24 py-36 block mx-auto w-full">
          <div class="max-w-3xl mx-auto block">
            <h3
              class="tenez text-center text-3xl md:text-4xl leading-9 md:leading-11 tracking-wide"
            >
              Izabela worked on some custom Squarespace development for my
              company website doreal.work and I am delighted with the result
              that hits that perfect note of looking simple and perfect on any
              device. I highly recommend her.
            </h3>
            <p
              class="sofia text-center text-sm light tracking-wider mt-8 px-12"
            >
              Fleur Emery, Founder of
              <a
                href="https://www.doreal.work/"
                target="_blank"
                class="medium hover:text-black"
                >REALWORK</a
              >, the online co-working space for women
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Quote -->

    <!-- CLIENTS -->
    <div class="py-24">
      <div class="container mx-auto max-w-3xl px-12 md:px-16">
        <p class="tenez text-center text-lrg">Select clients</p>
        <p
          class="sofia light text-md text-center tracking-wide mt-4 leading-8 mt-8"
        >
          Ballymore, AKA, Dixons Carphone, CNBC, IRIS Worldwide, The Gate
          London, Sainsbury’s Nectar, Nike, REALWORK, Boots, Reebok, L’Oreal,
          Hilton, Suzuki, Intel, TAG Worldwide, Banda Property, The
          Communication Group PR
        </p>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="pt-24">
      <div class="bg-tan p-12 py-24 md:p-24">
        <div class="flex flex-row justify-between">
          <div>
            <p class="sofia light text-left leading-7">
              <span class="medium">CONTACT DETAILS</span><br />
              <a href="mailto:hello@izabelamagiera.co"
                >hello@izabelamagiera.co</a
              >
              <br />
              @izabelamagiera.co<br />
              07703 847 355
            </p>
          </div>
          <div class="relative flex flex-col justify-center">
            <imcrtv-logo class="logo-spin block relative" />
            <imcrtv-text id="imcrtvTxt" class="logo-spin absolute right-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.logoOpacity()
  },
  methods: {
    logoOpacity() {
      // const tl = new TimelineMax()
      gsap.to('#showLogo', {
        scrollTrigger: {
          trigger: '#anime',
          start: '0 0',
          toggleActions: 'play none resume reset',
        },
        duration: 0.75,
        opacity: 1,
      })
      gsap.to('#logoSpin', {
        scrollTrigger: {
          trigger: '#anime',
          start: '0 0',
          toggleActions: 'play none resume reverse',
        },
        duration: 1,
        rotation: 360,
      })
    },
  },
}
</script>

<style scope></style>
