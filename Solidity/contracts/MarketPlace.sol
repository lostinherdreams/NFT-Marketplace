// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Storage.sol";

contract MarketPlace {
    uint public elementID;
    address payable storageAddress;
    uint feePercentage;
    address payable owner;

    struct Element {
        IERC721 nft;
        address payable owner;
        uint tokenID;
        uint price;
        bool isForSale;
    }
    mapping(uint => Element) public elements;

    constructor(uint _feePercentage) {
        elementID = 1;
        feePercentage = _feePercentage;
        storageAddress = payable(address(new Storage()));
    }

    event AddedForSale(
        uint elementID,
        address indexed owner,
        uint indexed tokenID,
        uint price
    );
    event sold(
        uint elementID,
        address indexed previousOwner,
        address indexed newOwner,
        uint indexed tokenID,
        uint price
    );

    modifier isBuyable(uint _elementID) {
        require(
            _elementID > 0 && _elementID <= elementID,
            "element doesn't exist"
        );
        require(elements[_elementID].isForSale, "Not for Sale!");

        _;
    }

    modifier isSellable(uint _elementID) {
        require(
            _elementID > 0 && _elementID <= elementID,
            "element doesn't exist"
        );
        require(!elements[_elementID].isForSale, "Already for Sale!");

        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can withdraw!");
        _;
    }

    function buyNfts(uint _elementID) external payable isBuyable(_elementID) {
        Element storage e = elements[_elementID];
        address payable previousOwner = e.owner;
        uint _price = e.price;
        uint _feePrice = (_price * feePercentage) / 100;
        require(msg.value >= _price + _feePrice, "Not enough money!");

        previousOwner.transfer(e.price);
        payable(storageAddress).transfer(_feePrice);

        e.nft.safeTransferFrom(e.owner, msg.sender, e.tokenID);

        e.owner = payable(msg.sender);
        e.isForSale = false;

        elements[_elementID] = e;
        emit sold(
            _elementID,
            previousOwner,
            msg.sender,
            e.tokenID,
            _price + _feePrice
        );
    }

    function putNFTforSale(uint _elementID) external isSellable(_elementID) {
        elements[_elementID].isForSale = true;
    }

    function addNFTForSale(IERC721 _nft, uint _price) external {
        elements[elementID] = Element(
            _nft,
            payable(msg.sender),
            elementID,
            _price,
            true
        );
        elementID++;
    }

    function getStorageAccount() view public onlyOwner returns (address) {
        return storageAddress;
    }
}
