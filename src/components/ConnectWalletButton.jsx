import React, { useState, useEffect } from "react";
import Web3 from "web3";
import MetamaskLogo from "../assets/images/metamask.svg";

const ConnectWalletButton = ({ setAccountsList }) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Metamask is installed
    if (window.ethereum) {
      // Initialize Web3 object
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      // Request user accounts from Metamask
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          localStorage.setItem("account", accounts[0]);
          setAccountsList(accounts);
          setAccounts(accounts);
        })
        .catch((error) => console.error(error));
      // Subscribe to account change events
      window.ethereum.on("accountsChanged", (accounts) => {
        localStorage.setItem("account", accounts[0]);
        setAccountsList(accounts);
        setAccounts(accounts);
      });
      // Subscribe to network change events
      window.ethereum.on("chainChanged", () => window.location.reload());
    } else {
      setError("Metamask not found");
    }
  }, []);

  const connectWallet = async () => {
    if (!web3) {
      setError("Metamask not found");
      return;
    }
    try {
      // Request user accounts from Metamask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      localStorage.setItem("account", accounts[0]);
      setAccounts(accounts);
      setAccountsList(accounts);
      // Check if user is connected to the Goerli test network
      const chainId = await web3.eth.getChainId();
      if (chainId !== 5) {
        setError("Please connect to the Goerli test network");
      } else {
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError("Error connecting to Metamask");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <button
        className=" bg-white  text-[#211F35] font-bold hidden md:flex items-center py-2 rounded-full"
        onClick={connectWallet}
      >
        <img src={MetamaskLogo} className="h-6 mr-2" />
        {accounts.length === 0
          ? "Connect Wallet"
          : `Connected to: ${accounts[0].slice(0, 6)}...${accounts[0].slice(
              -4
            )}`}
      </button>
    </>
  );
};

export default ConnectWalletButton;
