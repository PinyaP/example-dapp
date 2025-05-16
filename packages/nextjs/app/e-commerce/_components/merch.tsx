import Image from "next/image";

export const Merch = ({
  logo,
  name,
  description,
  price,
}: {
  logo: string;
  name: string;
  description: string;
  price: number;
}) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="border border-gray-400 p-6 rounded-lg flex flex-col items-center bg-[#1E2A47] text-white">
        <div className="text-xl font-semibold mb-4">{name}</div>

        <div className="w-48 h-48 mb-4 relative rounded-full overflow-hidden">
          <Image src={logo} alt={name} fill className="object-cover" />
        </div>

        <div className="text-sm mb-4 text-center">{description}</div>

        {/* Poké Ball and Price in one row */}
        <div className="flex items-center gap-2 text-lg font-bold">
          <Image src="/Poke_Ball.png" alt="Poké Ball" width={24} height={24} />
          {price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
