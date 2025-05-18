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
      <div className="flex p-2 rounded-xl shadow-md bg-base-200 items-center bg-black mx-4">
        <div className="w-1/10 flex justify-center">
          <Image src={logo} width={56} height={56} alt={`${workplace} logo`} className="rounded-full" />
        </div>

        <div className="w-5/6">
          <div className="flex flex-wrap gap-2 items-center mb-1">
            <span className="font-bold text-lg">{workplace}</span>
            <span className="text-sm">{duration}</span>
          </div>
          <div className="text-sm font-medium mb-1">{role}</div>
          <p className="text-sm text-base-content leading-relaxed">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};
