<template>
  <section
    class="overflow-hidden bg-gradient-to-br from-primary-light to-primary-dark py-10 sm:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2
          class="mt-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          Why you should use a <span class="text-secondary">Merkle Tree</span>
        </h2>
        <p
          class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Creating a whitelist of a few address for your NFT project is simple
          and really no big deal. But what happens when your whitelist grows to
          a couple hundred or even a couple thousand addresses? Using a mapping
          for this is crazy expensive and inefficient. A whitelist of a thousand
          addresses can easily cost your project 1 ETH in gas.

          <br />
          <br />
          A MerkleTree is an alternative solution to the expensive mapping
          problem. This solution is very cheap and used by big companies like
          Uniswap. Find our here how you should set up your MerkleTree today!
        </p>

        <client-only>
          <div class="flex w-full items-center justify-center pt-16">
            <blockquote class="twitter-tweet mx-auto mt-8">
              <p lang="en" dir="ltr">
                Make setting your whitelist 90%+ cheaper!<br /><br />Learn how
                to set a big whitelist on your Solidity contract using Merkle
                Proof. In this thread 🧵, I will explain step by step how to
                implement this today!<br /><br />
                1/*<br /><br />⬇️⬇️⬇️
              </p>
              &mdash; David Lo Dico AKA DiLoco.eth(✨🪶) (@David_LoDico)
              <a
                href="https://twitter.com/David_LoDico/status/1514914113905823747?ref_src=twsrc%5Etfw"
                >April 15, 2022</a
              >
            </blockquote>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script></div
        ></client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
