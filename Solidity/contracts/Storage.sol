// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Storage {
    uint public balance;
    address payable owner;

    constructor() {
        balance = 0;
        owner = payable(msg.sender);
    }

    event FundsStored(address indexed from, uint amount);
    event FundsWithdrawn(address indexed to, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can withdraw!");
        _;
    }

    function store() public payable {
        balance += msg.value;
        emit FundsStored(msg.sender, msg.value);
    }

    function withdraw(uint amount) external {
        require(amount <= balance, "Insufficient balance");

        owner.transfer(amount);
        emit FundsWithdrawn(msg.sender, amount);
    }

    receive() external payable {
        store();
    }
}
