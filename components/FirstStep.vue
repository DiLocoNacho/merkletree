<template>
  <section
    class="overflow-hidden bg-gradient-to-tr from-primary-light to-primary-dark py-10 sm:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2
          class="mt-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          <span class="text-secondary">1. </span> Upload and set
        </h2>
        <p
          class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Use the tool on this page to generate the Merkle Tree Root for your
          whitelist. Alternatively, you can create the root yourself by using
          the
          <a
            href="https://github.com/miguelmota/merkletreejs"
            target="_blank"
            class="underline"
            >MerkleTreeJS</a
          >
          library. Notice that the hashing algorithm should be keccak256 and
          pair sorting should be enabled.
        </p>
      </div>

      <div class="mt-10 sm:mt-16">
        <pre
          class="mx-auto -mb-12 w-full max-w-3xl rounded-lg"
        >        <code v-highlight class="solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// @title Example contract Merkle root
// @author @David_LoDico

contract MerkleTree {
    // Publicly store the merkle root of your whitelist
    bytes32 public MerkleRoot;

    // Set the merkle root of your whitelist here. Make sure this has an OnlyOwner modifier!
    function setMerkleRoot(bytes32 _merkleRoot) external {
        MerkleRoot = _merkleRoot;
    }
}
</code>
      </pre>
        <div class="mx-auto w-full max-w-3xl">
          <span class="text-sm font-light italic text-gray-300"
            >Setting and storing the Merkle Tree Root in your contract</span
          >
        </div>
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

// Create the Merkle Tree Root
const merkleTreeRoot = new MerkleTree(merkleTreeLeaves, keccak256, {
  sortPairs: true,
})
  .getRoot()
  .toString('hex')

// Console Log the merkle tree root
console.log(merkleTreeRoot)

</code>
      </pre>
        <div class="mx-auto w-full max-w-3xl">
          <span class="text-sm font-light italic text-gray-300"
            >Creating your Merkle Root using Javascript</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FirstStep',
}
</script>

<style></style>
