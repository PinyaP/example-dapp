import Image from "next/image";

export const Merch = ({
  logo,
  name,
  description,
  price,
  onMint,
  loading,
}: {
  logo: string;
  name: string;
  description: string;
  price: number;
  onMint?: () => void;
  loading?: boolean;
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="border p-4 rounded-lg shadow-md">
        <div className="text-xl font-bold">{name}</div>
        <div className="flex justify-center">
          <Image src={logo} width={200} height={200} alt={`${name} image`} className="rounded-full" />
        </div>
        <div>{description}</div>
        <div className="font-semibold">Price: {price} PKC</div>
        <button className="btn btn-primary mt-2" onClick={onMint} disabled={loading}>
          {loading ? "Minting..." : "Mint"}
        </button>
      </div>
    </div>
  );
};
