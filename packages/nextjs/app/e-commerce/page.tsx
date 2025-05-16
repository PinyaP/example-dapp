import pokemonData from "../../public/mockPokemonData.json";
import { Merch } from "./_components/merch";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "E-Commerce",
  description: "E-Commerce web3 design.",
});

const Ecommerce: NextPage = () => {
  const { address } = useAccount();

  const { data: pkcBalance } = useScaffoldReadContract({
    contractName: "PKCToken",
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Hello World</h1>
        <p className="text-neutral">I will try making an E-Commerce App Here.</p>
        <p>Your Balance{pkcBalance}</p>
        <div className="flex flex-wrap justify-center">
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
    </>
  );
};

export default Ecommerce;
