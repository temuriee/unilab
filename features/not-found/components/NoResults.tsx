import Image from "next/image";
import Link from "next/link";

interface NoResultsProps {
  searchQuery?: string;
}

export function NoResults({ searchQuery = "" }: NoResultsProps) {
  return (
    <div className="w-full min-h-[500px] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
        {/* Illustration */}
        <div className="shrink-0 flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[430px]">
            {/* SVG illustration of person with magnifying glass */}
            <Image
              src={"/Notfound.png"}
              alt="No Results"
              width={360}
              height={430}
              className=" object-contain  "
            />

            {/* NO RESULTS badge */}
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center gap-4 p-5 rounded-xl w-full max-w-[438px] border-2 border-[#D9D9D9]">
          <p className="text-[#262626] font-extrabold">
            No results were found for searching
            <span> "{searchQuery}"</span>.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src={"/warning.svg"}
                alt="Warning"
                width={24}
                height={24}
              />
              <p className="text-sm text-[#555555]">
                We recommend you to search different clear key words to get the
                best result.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/warning.svg"}
                alt="Warning"
                width={24}
                height={24}
              />
              <p className="text-sm text-[#555555]">
                You can see the most related purchased products bellow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
