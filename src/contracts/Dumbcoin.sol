// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

// This code is untested and extremely naive and it might not work.
// Only did it for the purposes of learning solidity

contract Dumbcoin {
  address owner;
  mapping(address => uint256) public balances;

  constructor() {
    owner = msg.sender;
    balances[owner] = 1000;
  }

  function transfer(uint256 amount, address recipient) public {
    require(balances[msg.sender] >= amount);
    require(balances[msg.sender] - amount <= balances[msg.sender]);
    require(balances[recipient] + amount >= balances[recipient]);
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
  }
}
