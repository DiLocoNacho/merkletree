<template>
  <section
    class="overflow-hidden bg-gradient-to-br from-primary-light to-primary-dark py-10 sm:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2
          class="mt-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          <span class="text-secondary">2. </span> Generate Proof
        </h2>
        <p
          class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Create and API endpoint and pass the users address to it. The API will
          return the proof for the given address. Please be carefull when
          passing the address to the API! I recommend using
          <a
            href="https://www.npmjs.com/package/web3-token"
            target="_blank"
            class="underline"
            >Web3-Token</a
          >
          to encrypt the address before sending it to the endpoint.
        </p>
      </div>

      <div class="mt-10 sm:mt-16">
        <pre
          class="mx-auto -mb-12 w-full max-w-3xl rounded-lg"
        >        <code v-highlight class="javascript">import keccak256 from 'keccak256'
import { MerkleTree } from 'merkletreejs'

// Add your whitelist as a JSON here
const whitelistAddresses = [
  '0x58ea265c241ba51e43b220050ded6605a2ee38a0',
  '0x0c24a6c402c9df7747ade031291ba9dad83843d8',
  '0x47283c4b07b6f86a79264ad9c39dadf9d7c3a77f',
  '0x6a5044898bb454b4f3ed0f2a7466c20e4d7168cd',
  '0x8ea3b98fcb434f4e6d0950cb558facac7e52a721',
  '0xdc8faf84741ba2269c07011b29aef1a0a6cb4b20',
  '0xec53c0339111246ff3deb8fb673c205d61864a52',
  '0x56a28b75cca215d6fec2497d5b1fd0b32487a7ed',
]

// Create the leaves of your Merkle Tree
const merkleTreeLeaves = whitelistAddresses.map((address) => keccak256(address))

// Create the Merkle Tree
const merkleTree = new MerkleTree(merkleTreeLeaves, keccak256, {
  sortPairs: true,
})

// get the proof for a specific address
function getProofForAddress(address) {
  try {
    const leaf = keccak256(address)
    const proof = merkleTree.getHexProof(leaf)
    return proof
  } catch (err) {
    console.log(err)
  }
}

// Handle API call and return the proof here

</code>
      </pre>
        <div class="mx-auto w-full max-w-3xl">
          <span class="text-sm font-light italic text-gray-300"
            >Handle the API call and return proof for address</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SecondStep',
}
</script>

<style></style>
