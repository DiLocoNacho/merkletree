<template>
  <section
    class="overflow-hidden bg-gradient-to-br from-primary-light to-primary-dark py-10 sm:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-center md:space-x-14">
        <div class="relative h-24 w-24 flex-shrink-0">
          <div
            class="absolute -bottom-1 -right-1 h-24 w-24 rounded-full bg-secondary"
          ></div>
          <img
            class="relative h-24 w-24 rounded-full object-cover"
            src="@/assets/img/DavidRound.png"
            alt=""
          />
        </div>

        <div class="mt-10 md:mt-0">
          <blockquote>
            <p class="text-3xl text-white">Made by David Lo Dico</p>
          </blockquote>
          <p class="mt-1 text-base text-gray-300">
            Fullstack Blockchain developer
          </p>
          <a
            href="https://www.twitter.com/david_lodico"
            target="_blank"
            class="mt-4 flex items-center space-x-2 text-white"
            ><img
              src="@/assets/img/icons8-twitter-48.png"
              class="h-8 w-8"
            />Twitter</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
}
</script>

<style></style>
