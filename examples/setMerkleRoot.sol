// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**
 * @title Merkle Tree example implementation
 * @author @David_LoDico
 * @notice This code serves just as an example.
 */

contract MerkleTree {
    // Publicly store the merkle root of your whitelist
    bytes32 public merkleRoot;

    // Set the merkle root of your whitelist here. Make sure this has an OnlyOwner modifier!
    function setMerkleRoot(bytes32 _merkleRoot) external {
        merkleRoot = _merkleRoot;
    }
}
