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
    <div className="w-full mb-2">
      <div
        className="flex flex-row p-4 rounded-2xl shadow-xl bg-zinc-700 items-center gap-4 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 bg-white rounded-xl p-1">
          <Image
            src={logo}
            width={48}
            height={48}
            alt={`${workplace} logo`}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-row flex-wrap gap-2 items-center mb-1">
            <span className="font-extrabold text-lg text-white">{workplace}</span>
            <span className="text-sm text-gray-300">{duration}</span>
          </div>
          <div className="text-base font-bold text-blue-200 mb-1">{role}</div>
          <p className="text-sm text-gray-200 leading-snug">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};
