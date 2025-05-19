import Image from "next/image";

export const WorkTemplate = ({
  workplace,
  role,
  logo,
  duration,
  shortDescription,
}: {
  workplace: string;
  role: string;
  logo: string;
  duration: string;
  shortDescription: string;
}) => {
  return (
    <div className="w-full my-2">
      <div
        className="flex p-4 rounded-xl shadow-md bg-base-200 items-center bg-black mx-4
                   transition duration-300 ease-in-out transform hover:scale-110"
      >
        <div className="w-1/6 flex justify-center">
          <Image
            src={logo}
            width={100}
            height={100}
            alt={`${workplace} logo`}
            className="rounded-full"
          />
        </div>

        <div className="w-5/6">
          <div className="flex flex-wrap gap-2 items-center mb-1">
            <span className="font-bold text-lg text-white">{workplace}</span>
            <span className="text-sm text-gray-400">{duration}</span>
          </div>
          <div className="text-sm font-medium text-gray-300 mb-1">{role}</div>
          <p className="text-sm text-gray-400 leading-relaxed">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};
