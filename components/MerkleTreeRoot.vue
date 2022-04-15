<template>
  <section
    class="bg-gradient-to-tr from-primary-light to-primary-dark py-12 md:py-20"
  >
    <div
      v-if="$store.state.whitelist"
      class="mx-auto mt-8 px-4 sm:px-6 md:px-8"
    >
      <div id="merkleTreeRoot" class="flex items-end justify-center">
        <h2
          class="mt-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          Here is your Root
        </h2>
        <img
          src="@/assets/img/arrow-twist.svg"
          class="ml-4 inline-block w-16 translate-y-4"
        />
      </div>
      <div class="mt-6 mb-24 flex items-center justify-center">
        <div
          class="flex cursor-pointer items-center justify-center rounded-xl bg-white bg-opacity-10 p-1"
          @click="copyRoot()"
        >
          <p class="mx-4 text-2xl text-secondary">
            {{ merkleRoot }}
          </p>
          <kbd
            class="items-center rounded-lg border border-gray-200 bg-white bg-opacity-80 px-2 font-sans text-3xl text-gray-600"
          >
            ⌘C
          </kbd>
        </div>
      </div>
      <div class="space-y-6">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div class="rounded-xl border bg-white lg:col-span-4">
            <div class="relative">
              <div
                class="overflow-scroll rounded-lg focus-within:border-none focus-within:ring-0"
              >
                <div
                  class="flex flex-col rounded-xl border-b border-gray-300 bg-gray-100 px-4 py-3 sm:px-6"
                >
                  <h3 class="text-xl font-bold text-gray-900">
                    Your Merkle Tree
                  </h3>
                  <p class="text-sm font-medium text-gray-500">
                    This is the whole tree, all its leaves and root.
                  </p>
                </div>

                <pre
                  class="overflow-scroll px-4 py-5 text-sm text-black text-opacity-80 sm:p-6"
                  >{{ merkleTree }}</pre
                >
              </div>
            </div>
          </div>
          <div class="space-y-6 lg:col-span-2">
            <div class="rounded-xl border bg-white lg:col-span-2">
              <div class="relative">
                <div
                  class="rounded-lg focus-within:border-none focus-within:ring-0"
                >
                  <div
                    class="flex flex-col rounded-xl border-b border-gray-300 bg-gray-100 px-4 py-3 sm:px-6"
                  >
                    <h3 class="text-xl font-bold text-gray-900">
                      Proof for address
                    </h3>
                    <p class="text-sm font-medium text-gray-500">
                      You need to pass this to your contract to proof that the address is part of the whitelist.
                    </p>
                  </div>
                  <div
                    v-if="$store.state.whitelist"
                    class="relative px-4 py-5 sm:p-6"
                  >
                    <button
                      type="button"
                      class="relative w-full cursor-default rounded-xl border border-primary-dark bg-white bg-opacity-10 py-2 pl-3 pr-10 text-left focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light sm:text-sm"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                      @click="showDropdown = !showDropdown"
                    >
                      <span class="block truncate">
                        {{ $store.state.whitelist[selectedLeave] }}
                      </span>
                      <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                      >
                        <svg
                          class="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      v-show="showDropdown"
                      class="fixed inset-0 bg-transparent"
                      @click="showDropdown = false"
                    ></div>
                    <ul
                      v-if="showDropdown"
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      tabindex="-1"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-option-3"
                    >
                      <li
                        v-for="(leaf, index) in $store.state.whitelist"
                        :key="leaf"
                        class="relative cursor-pointer select-none py-2 pl-8 pr-4 text-primary-light hover:bg-primary-dark hover:text-white"
                        role="option"
                        @click="setSelectedLeave(index)"
                      >
                        <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                        <span class="block truncate font-normal">
                          {{ leaf }}
                        </span>

                        <span
                          v-show="selectedLeave === index"
                          class="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600"
                        >
                          <svg
                            class="h-5 w-5 text-tertiary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <pre
                    class="overflow-scroll px-4 pb-5 text-sm text-black text-opacity-80 sm:px-6 sm:pb-6"
                    >{{ proofForLeaf }}</pre
                  >
                </div>
              </div>
            </div>
            <div class="rounded-xl border bg-white lg:col-span-2">
              <div class="relative">
                <div
                  class="rounded-lg focus-within:border-none focus-within:ring-0"
                >
                  <div
                    class="flex flex-col rounded-xl border-b border-gray-300 bg-gray-100 px-4 py-3 sm:px-6"
                  >
                    <h3 class="text-xl font-bold text-gray-900">
                      Try it out yourself
                    </h3>
                    <p class="text-sm font-medium text-gray-500">
                      Fill in any ETH address or text below and check if it is
                      on your original whitelist.
                    </p>
                  </div>
                  <div
                    v-if="$store.state.whitelist"
                    class="relative px-4 py-5 sm:p-6"
                  >
                    <input
                      v-model="addressCheck"
                      placeholder="Enter an address or text"
                      :class="
                        !addressCheck
                          ? 'border border-primary-dark focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark'
                          : !getProofForAddress(addressCheck).onWhiteList
                          ? 'border-2 border-red-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500'
                          : 'border border-green-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500'
                      "
                      type="text"
                      class="relative w-full cursor-default rounded-xl bg-white bg-opacity-10 py-2 pl-3 pr-10 text-left sm:text-sm"
                    />
                    <div
                      v-if="addressCheck"
                      class="mt-2 flex items-center space-x-2"
                    >
                      <svg
                        v-if="getProofForAddress(addressCheck).onWhiteList"
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
                      <svg
                        v-else
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
                      <p
                        :class="
                          getProofForAddress(addressCheck).onWhiteList
                            ? 'text-green-500'
                            : 'text-red-500'
                        "
                        class="text-sm font-light"
                      >
                        {{
                          getProofForAddress(addressCheck).onWhiteList
                            ? 'Address is on whitelist'
                            : 'Address is not on whitelist'
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedLeave: 0,
      showDropdown: false,
      addressCheck: null,
    }
  },
  computed: {
    merkleRoot() {
      if (this.$store.state.whitelist) {
        return this.getMerkleTreeRoot()
      }
      return null
    },
    merkleTree() {
      if (!this.$store.state.whitelist) {
        return null
      } else {
        return this.generateMerkleTree().toString()
      }
    },
    proofForLeaf() {
      if (!this.$store.state.whitelist) {
        return null
      } else {
        return this.getProofForAddress(
          this.$store.state.whitelist[this.selectedLeave]
        ).proof
      }
    },
  },
  methods: {
    async copyRoot() {
      await navigator.clipboard.writeText(this.merkleRoot)
      this.$toast.success('Copied to clipboard', { duration: 1500 })
    },
    setSelectedLeave(index) {
      this.selectedLeave = index
      this.showDropdown = false
    },
  },
}
</script>

<style></style>
