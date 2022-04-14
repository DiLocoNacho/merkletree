<template>
  <section
    class="overflow-hidden bg-gradient-to-tr from-primary-light to-primary-dark py-10 sm:py-16 lg:py-24"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2
          class="mt-4 text-center text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
        >
          <span class="text-secondary">3. </span> Call the contract
        </h2>
        <p
          class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
        >
          Now you can call the whitelist mint function and pass the proof array
          you received in the previous step. Use the OpenZeppeling
          <a
            href="https://docs.openzeppelin.com/contracts/4.x/api/utils#MerkleProof"
            target="_blank"
            class="underline"
            >MerkleProof
          </a>
          library to verify if the address of msg.sender is in the whitelist.
        </p>
      </div>

      <div class="mt-10 sm:mt-16">
        <pre
          class="mx-auto -mb-12 w-full max-w-3xl rounded-lg"
        >        <code v-highlight class="solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**
 * @title Merkle Tree whitelist example
 * @author @David_LoDico
 * @notice This code serves just as an example.
 */

import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';

contract MerkleTreeContract {
    bytes32 public merkleRoot;

    /**
     * @notice Example of how to do a whitelist mint with a Merkle Proof requirement
     */
    function whitelistMint(bytes32[] calldata _merkleProof) external payable {
        bytes32 merkleLeaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, merkleLeaf),
            'You are not on the whitelist'
        );
        /** 
            @notice handle mint
         */
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThirdStep',
}
</script>

<style></style>
