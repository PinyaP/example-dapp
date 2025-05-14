// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pokemon is ERC20, Ownable {
    constructor(uint256 initialSupply) 
        ERC20("PokeCoin", "PKC")
        Ownable(msg.sender)
    {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    // Function to mint more PKC tokens (only owner can call this)
    function mintPKC(address receiver, uint256 amount) public onlyOwner returns (uint256) {
        uint256 mintAmount = amount * 10 ** decimals();
        _mint(receiver, mintAmount);
        return mintAmount;
    }
}
