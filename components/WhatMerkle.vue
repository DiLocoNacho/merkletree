<template>
  <section
    class="overflow-hidden bg-gradient-to-tr from-primary-light to-primary-dark py-10 sm:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:items-center md:gap-x-16"
      >
        <div>
          <img
            class="mx-auto w-full"
            src="@/assets/img/merkleTree.png"
            alt=""
          />
        </div>

        <div class="md:text-left lg:pr-4">
          <h2
            class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
          >
            What is a Merkle Tree
          </h2>
          <p
            class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
          >
            A MerkleTree, also known as a hash tree, is a data structure used to
            efficiently verify the integrity of large amounts of data. The tree
            is constructed by creating a hash for each piece of data, and then
            combining those hashes into a single hash at the top of the tree.
            The resulting hash is known as the root hash. To verify the
            integrity of the data, one simply needs to compute the root hash and
            compare it to the previously computed root hash. If they match, then
            the data has not been modified. MerkleTrees are used in a variety of
            settings, including file sharing networks and blockchain systems.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
