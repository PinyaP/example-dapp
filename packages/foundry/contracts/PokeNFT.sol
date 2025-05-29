// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pokemon is ERC721, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("PokeNFT", "PKNFT") Ownable(msg.sender) {}

    // Function to mint a new NFT to a receiver
    function mintNFT(address receiver) public onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId;
        _mint(receiver, tokenId);
        nextTokenId++;
        return tokenId;
    }
}
