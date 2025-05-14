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
      <div className="border border-gray-400 p-6 rounded-lg flex flex-col items-center">
        <div className="text-xl font-semibold mb-2">{name}</div>

        <div className="w-48 h-48 mb-4 relative rounded-full overflow-hidden">
          <Image src={logo} alt={name} fill className="object-cover" />
        </div>

        <div className="text-black text-sm mb-2 text-center">{description}</div>
        <div className="text-lg font-bold">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};
