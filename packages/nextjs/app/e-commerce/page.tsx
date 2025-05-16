"use client";

import { useEffect, useState } from "react";
// Added parseEther
import Image from "next/image";
import { abi } from "../../abi";
import pokemonData from "../../public/mockPokemonData.json";
// Added useEffect
import { Merch } from "./_components/merch";
import type { NextPage } from "next";
// Ensure this ABI includes all functions: balanceOf, mintPKC, and your spend/transfer/approve functions
import { formatEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

const Ecommerce: NextPage = () => {
  const { address, isConnected } = useAccount();
  const { writeContract, isPending: isMintPending, isSuccess: isMintSuccess, error: mintError } = useWriteContract();
  const [mintAmount] = useState(BigInt(1000));
  const contractAddress = process.env.NEXT_PUBLIC_POKECOIN_CONTRACT as `0x${string}`;

  const {
    data: pkcBalance,
    refetch,
    isLoading: isBalanceLoading,
    isError: isBalanceError,
  } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const handleMint = async () => {
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }
    try {
      writeContract(
        {
          abi,
          address: contractAddress,
          functionName: "mintPKC",
          args: [address, mintAmount],
        },
        {
          onSuccess: async () => {
            console.log("Mint successful, refetching balance...");
            await refetch();
            console.log("Balance refetched after mint.");
          },
          onError: error => {
            console.error("Error minting PKC:", error);
          },
        },
      );
    } catch (error) {
      console.error("Error preparing mint transaction:", error);
    }
  };

  useEffect(() => {
    if (isMintSuccess) {
      console.log("isMintSuccess triggered, refetching balance.");
      refetch();
    }
  }, [isMintSuccess, refetch]);

  // const handlePurchaseOrSpendSuccess = async () => {
  //   console.log("Purchase/spend successful from Merch, refetching balance...");
  //   await refetch();
  //   console.log("Balance refetched after purchase/spend.");
  // };

  return (
    <div className="text-center mt-8 bg-secondary p-10">
      <h1 className="text-4xl my-0">Pokemon Store</h1>
      <p className="text-neutral">Mint your first Pokemon token here!</p>

      <div className="w-full flex justify-center items-center gap-2 mt-4">
        <p className="text-lg font-semibold">
          Your Balance: {isBalanceLoading && !pkcBalance && "Loading..."}
          {isBalanceError && "Error fetching balance."}
          {pkcBalance !== undefined
            ? `${Number(formatEther(pkcBalance)).toFixed(2)} PKC`
            : address && isConnected
              ? "0.00 PKC"
              : "Connect wallet to see balance"}
        </p>
        {pkcBalance !== undefined && <Image src="/Poke_Ball.png" alt="Poké Ball" width={24} height={24} />}
      </div>

      {isConnected && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button onClick={handleMint} className="btn btn-primary" disabled={isMintPending || !address}>
            {isMintPending ? "Minting..." : `Mint ${mintAmount} PKC`}
          </button>
        </div>
      )}
      {mintError && <p className="text-error mt-2">Minting Error: {mintError.message}</p>}
      {!isConnected && (
        <p className="text-info mt-2">Please connect your wallet to mint tokens and interact with the store.</p>
      )}

      <div className="flex flex-wrap justify-center mt-8">
        {pokemonData.map(pokemon => (
          <Merch
            key={pokemon.name}
            name={pokemon.name}
            logo={pokemon.logo}
            description={pokemon.description}
            price={pokemon.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
