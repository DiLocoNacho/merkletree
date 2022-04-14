import keccak256 from 'keccak256'
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

// Create the Merkle Tree Root
const merkleTreeRoot = merkleTree.getRoot().toString('hex')

// Console Log the merkle tree root
console.log(merkleTreeRoot)
