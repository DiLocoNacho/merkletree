import Vue from 'vue'
import keccak256 from 'keccak256'
import { MerkleTree } from 'merkletreejs'
import Web3 from 'web3'

Vue.mixin({
  computed: {
    validEthWhitelist() {
      if (!this.$store.state.whitelist) return null
      const falseAddresses = []
      this.$store.state.whitelist.forEach((address, index) => {
        const valid = Web3.utils.isAddress(address)
        if (!valid) {
          falseAddresses.push(index)
        }
      })
      const result = falseAddresses.length === 0
      return { result, falseAddresses }
    },
  },
  methods: {
    generateRandomEthAddress(amount = 100) {
      const addresses = []
      for (let i = 0; i < amount; i++) {
        const address = Web3.utils.randomHex(20)
        addresses.push(address)
      }
      return addresses
    },
    getLeafNodes(whitelist) {
      return whitelist.map((address) => {
        return keccak256(address)
      })
    },
    generateMerkleTree() {
      const tree = new MerkleTree(
        this.getLeafNodes(this.$store.state.whitelist),
        keccak256,
        {
          sortPairs: true,
        }
      )
      return tree
    },
    getMerkleTreeRoot() {
      const finalMerkleTree = this.generateMerkleTree()
        .getRoot()
        .toString('hex')
      return finalMerkleTree
    },
    getProofForAddress(address) {
      const leaf = keccak256(address)
      const tree = this.generateMerkleTree()
      const proof = tree.getHexProof(leaf)
      const onWhiteList = tree.verify(proof, leaf, this.getMerkleTreeRoot())
      console.log(onWhiteList)
      return {
        proof,
        onWhiteList,
      }
    },
  },
})
