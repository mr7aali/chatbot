import { ClockIcon } from "@/icons/ClockIcon";
import { FaceBookIcon } from "@/icons/FaceBookIcon";
import { InstaIcon } from "@/icons/InstaIcon";
import { LocationIcon } from "@/icons/LocationIcon";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import { SectionProps } from "@/types/SectionProps";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const BusinessInfo = ({ className }: SectionProps) => {
  const Item = [
    {
      icon: <PhoneIcon className={"w-7 xl:w-9 fill-primary"} />,
      title: "01967519057",
      subtitle: "Call us now!",
    },
    {
      icon: <LocationIcon className={"w-7 xl:w-9 stroke-primary"} />,
      title: "Mirpur-13",
      subtitle: "Dhaka, Bangladesh",
    },
    {
      icon: <ClockIcon className={"w-7 xl:w-9 stroke-primary"} />,
      title: "Open Monday-Friday",
      subtitle: "8:00am - 9:00pm",
    },
  ];
  return (
    <section className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0  overflow-hidden shadow-2xl ">
        <div className="col-span-2 py-10 bg-dark/90 backdrop-blur-md">
          <div className="flex justify-between items-center sm:items-center sm:justify-center flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16 px-4">
            {Item.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 items-center bg-white/5 backdrop-blur-sm rounded-xl p-5 shadow-lg min-w-[180px] max-w-xs w-full border border-[#fac564]/10 hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center justify-center rounded-full bg-primary/20 w-14 h-14 shadow-md mb-2 sm:mb-0">
                  {item.icon}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-lg xl:text-xl font-bold text-primary drop-shadow-sm">
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-sm xl:text-base font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary/90 py-10 text-center flex justify-center items-center flex-row gap-6 rounded-none ">
          <Button
            as={Link}
            href="https://twitter.com"
            className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-white/40 transition-colors duration-200"
            startContent={<TwitterIcon className={"w-8 fill-white"} />}
            aria-label="Twitter"
          />
          <Button
            as={Link}
            href="https://facebook.com"
            className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-white/40 transition-colors duration-200"
            startContent={<FaceBookIcon className={"w-8 fill-white"} />}
            aria-label="Facebook"
          />
          <Button
            as={Link}
            href="https://instagram.com"
            className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-white/40 transition-colors duration-200"
            startContent={<InstaIcon className={"w-8 stroke-white"} />}
            aria-label="Instagram"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
