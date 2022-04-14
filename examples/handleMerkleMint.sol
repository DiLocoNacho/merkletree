// SPDX-License-Identifier: MIT
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
