<template>
  <div
    class="relative flex h-full min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light to-primary-dark"
  >
    <div class="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-primary-light text-opacity-30 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative">
      <main class="">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"
            >
              <div>
                <h1
                  class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  <span class="md:block">Save more than 90%</span>
                  <span class="text-secondary md:block">on your whitelist</span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Having big whitelists on your Ethereum contract can get very
                  expensive. This page explains how you can save more than 90%
                  on gas by using a Merkle Tree. Try out this free tool to
                  generate your own Merke Tree Root and follow the steps below
                  to implement it in your project.
                </p>
                <div class="flex translate-x-16 translate-y-10 items-center">
                  <p
                    class="font-Kalam text-4xl font-semibold text-white text-opacity-60"
                  >
                    Paste your whitelist JSON here
                  </p>
                  <img
                    class="ml-2 w-16 translate-x-4"
                    src="@/assets/img/arrow.svg"
                  />
                </div>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div
                class="bg-white sm:mx-auto sm:w-full sm:max-w-lg sm:overflow-hidden sm:rounded-lg"
              >
                <div class="relative">
                  <div
                    class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-none focus-within:ring-0"
                  >
                    <div
                      class="flex items-center justify-between border-b border-gray-300 bg-gray-100 px-6 py-3"
                    >
                      <h2 class="text-2xl font-semibold">Your Whitelist</h2>
                      <span
                        v-if="$store.state.whitelist"
                        class="text-lg font-light text-gray-600"
                        >{{ $store.state.whitelist.length }}
                        {{
                          $store.state.whitelist.length === 1
                            ? 'address'
                            : 'addresses'
                        }}</span
                      >
                    </div>
                    <textarea
                      v-model="whitelistInput"
                      :rows="placeholderAddresses.length + 2"
                      class="h-full w-full border-none px-6 py-2 placeholder:font-light"
                      :placeholder="jsonParser(placeholderAddresses)"
                      spellcheck="false"
                      @input="changeInput($event.target.value)"
                    />

                    <div aria-hidden="true">
                      <div class="h-px"></div>
                      <div class="py-2">
                        <div class="py-px">
                          <div class="h-9"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute inset-x-px bottom-0">
                    <div
                      class="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3"
                    >
                      <div class="flex">
                        <svg
                          v-if="inputStatus.status === 'empty' && firstInput"
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 h-5 w-5 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                        <svg
                          v-if="inputStatus.status === 'invalid'"
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 h-5 w-5 text-orange-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          v-if="
                            inputStatus.status === 'valid' &&
                            !validEthWhitelist.result
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 h-5 w-5 text-orange-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          v-if="
                            inputStatus.status === 'valid' &&
                            validEthWhitelist.result
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-2 h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p
                          v-if="firstInput"
                          class="text-sm font-light italic text-gray-500"
                        >
                          {{
                            inputStatus.status === 'valid' &&
                            !validEthWhitelist.result
                              ? `List contains ${validEthWhitelist.falseAddresses.length} invalid addresses`
                              : inputStatus.message
                          }}
                        </p>
                      </div>
                      <div class="flex-shrink-0">
                        <nuxt-link
                          v-if="$store.state.whitelist"
                          type="button"
                          :event="inputStatus.status === 'valid' ? 'click' : ''"
                          to="#merkleTreeRoot"
                          :class="
                            inputStatus.status === 'valid'
                              ? 'cursor-pointer bg-secondary'
                              : 'cursor-not-allowed bg-gray-300'
                          "
                          class="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm"
                        >
                          Get MerkleTree Root
                        </nuxt-link>
                        <button
                          v-else
                          class="rounded-lg border border-gray-400 px-4 py-2 text-sm italic"
                          @click="setFakeData(generateRandomEthAddress(25))"
                        >
                          Generate 25 Fake Addresses
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                class="mt-2 text-center font-light italic text-white text-opacity-40"
              >
                Your data never leaves your browser
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import placeholderAddresses from '@/assets/placeholder/ethAddresses.json'
export default {
  name: 'IndexPage',
  data() {
    return {
      placeholderAddresses,
      whitelistInput: null,
      firstInput: false,
    }
  },
  computed: {
    inputStatus() {
      if (!this.whitelistInput) {
        return {
          status: 'empty',
          message: 'Please enter your whitelist in valid JSON',
        }
      }
      if (this.whitelistInput && !this.isValidJSON(this.whitelistInput)) {
        return { status: 'invalid', message: 'Please enter a valid JSON' }
      }
      if (this.whitelistInput && this.isValidJSON(this.whitelistInput)) {
        return { status: 'valid', message: '' }
      }
      return null
    },
  },
  methods: {
    setFakeData(value) {
      if (!this.firstInput) this.firstInput = true
      this.$store.commit('SET_WHITELIST', value)
      this.whitelistInput = this.jsonParser(value)
      this.getMerkleTreeRoot()
    },
    changeInput(value) {
      console.log(value)
      if (!this.firstInput) this.firstInput = true
      if (!this.isValidJSON(value)) {
        this.$store.commit('SET_WHITELIST', null)
        return
      }
      this.$store.commit('SET_WHITELIST', JSON.parse(value))
      this.getMerkleTreeRoot()
    },
    isValidJSON(value) {
      try {
        JSON.parse(value)
      } catch (e) {
        return false
      }
      return true
    },
    jsonParser(array) {
      return JSON.stringify(array, null, 2)
    },
  },
}
</script>
