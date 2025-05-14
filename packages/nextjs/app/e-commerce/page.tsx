import { Merch } from "./_components/merch";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "E-Commerce",
  description: "E-Commerce web3 design.",
});

const Ecommerce: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Hello World</h1>
        <p className="text-neutral">I will try making an E-Commerce App Here.</p>
        <Merch
          name="Pikachu"
          logo="/pikachu.png"
          description="Pikachu is an Electric type Pokémon introduced in Generation 1."
          price={100}
        />
      </div>
    </>
  );
};

export default Ecommerce;
