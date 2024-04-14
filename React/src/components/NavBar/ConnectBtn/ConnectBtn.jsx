import "./ConnectBtn.css";
import * as eth from "../../ethers/ethService";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
export const ConnectBtn = () => {
    const [buttonText, setButtonText] = useState("Connecting...");
    useEffect(() => {
        const fetchUserAddress = async () => {
            try {
                const userAddress = await eth.getUserAddress();
                setButtonText(userAddress);
            } catch (error) {
                console.log(error);
                setButtonText("Error Connecting");
            }
        };
        fetchUserAddress();

        const handleAccountsChanged = async () => {
            fetchUserAddress();
        };
        window.ethereum.on("accountsChanged", handleAccountsChanged);

        return () => {
            window.ethereum.off("accountsChanged", handleAccountsChanged);
        };
    }, []);
    return <button className="connect-wallet">{buttonText}</button>;
};
