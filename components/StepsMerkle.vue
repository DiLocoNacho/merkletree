<template>
  <section
    class="bg-gradient-to-br from-primary-light to-primary-dark py-12 sm:py-16 lg:py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="mt-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          How it works
        </h2>
        <p
          class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      <div class="mx-auto mt-12 max-w-xl sm:px-10">
        <div class="relative pb-10">
          <span
            class="absolute top-8 left-12 -ml-px h-full w-px bg-gray-200"
            aria-hidden="true"
          ></span>

          <div
            class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div class="flex items-start sm:items-center">
              <div
                class="font-pj inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-xl font-bold text-white"
              >
                1
              </div>
              <p class="font-pj ml-6 text-xl font-medium text-gray-900">
                Upload your whitelist and set the Merkle Tree Root in your
                Solidity contract.
              </p>
            </div>
          </div>
        </div>

        <div class="relative pb-10">
          <span
            class="absolute top-8 left-12 -ml-px h-full w-px bg-gray-200"
            aria-hidden="true"
          ></span>

          <div class="absolute inset-y-8 -inset-x-1 -mt-10">
            <div
              class="mx-auto h-full w-full opacity-30 blur-lg filter"
              style="
                background: linear-gradient(
                  90deg,
                  #44ff9a -0.55%,
                  #44b0ff 22.86%,
                  #8b44ff 48.36%,
                  #ff6644 73.33%,
                  #ebff70 99.34%
                );
              "
            ></div>
          </div>

          <div
            class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div class="flex items-start sm:items-center">
              <div
                class="font-pj inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-xl font-bold text-white"
              >
                2
              </div>
              <p class="font-pj ml-6 text-xl font-medium text-gray-900">
                Create an API endpoint to generate the proof for the minters
                address.
              </p>
            </div>
          </div>
        </div>

        <div class="relative pb-10">
          <div
            class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div class="flex items-start sm:items-center">
              <div
                class="font-pj inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-xl font-bold text-white"
              >
                3
              </div>
              <p class="font-pj ml-6 text-xl font-medium text-gray-900">
                Call the mint function and pass the proof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
