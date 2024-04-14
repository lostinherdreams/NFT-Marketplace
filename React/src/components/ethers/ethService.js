import {
    NFTcontractAdress,
    MarketPlacecontractAdress,
    NFTcontractAbi,
    MarketPlacecontractAbi,
} from "./ethersConfig";
import { ethers } from "ethers";

let provider;
let signer;
let account;
let NFTcontract;
let MarketplaceContract;

export const getUserAddress = async () => {
    try {
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner()
            let accounts = await ethereum.request({
                method: "eth_requestAccounts",
                params: [],
            });
            return accounts[0];
        } else {
            console.error("Web3Provider not available. Please ensure MetaMask or a compatible wallet is installed.");
        }
    } catch (error) {
        window.alert("Error getting user address:", error.message);
        throw error;
    }
};


export const setup = async () => {
    try{
        account = await getUserAddress();
    
        NFTcontract = new ethers.Contract(
            NFTcontractAdress,
            NFTcontractAbi,
            provider
        );
    
        MarketplaceContract = new ethers.Contract(
            MarketPlacecontractAdress,
            MarketPlacecontractAbi,
            provider
        );
    }catch(error){
        console.log(error)
    }
};

