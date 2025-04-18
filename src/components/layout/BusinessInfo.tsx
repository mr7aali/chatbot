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
      icon: <PhoneIcon className={"w-8 xl:w-10 fill-primary"} />,
      title: "01967519057",
      subtitle: "Call us now!",
    },
    {
      icon: <LocationIcon className={"w-8 xl:w-10 stroke-primary"} />,
      title: "Mirpur-13",
      subtitle: "Dhaka, Bangladesh",
    },
    {
      icon: <ClockIcon className={"w-8 xl:w-10 stroke-primary"} />,
      title: "Open Monday-Friday",
      subtitle: "8:00am - 9:00pm",
    },
  ];
  return (
    <section className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 py-8 bg-dark">
          <div className="flex justify-between items-center sm:items-center sm:justify-center flex-col sm:flex-row gap-4 sm:gap-12 md:gap-16">
            {Item.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                {item.icon}
                <div className="text-center">
                  <p className="text-[14px] xl:text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-sm xl:text-[18px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary  py-8 text-center flex justify-center items-center">
          <Button
            as={Link}
            href="https://twitter.com"
            className="bg-transparent"
            startContent={<TwitterIcon className={"w-8 fill-white"} />}
          />
          <Button
            as={Link}
            href="https://facebook.com"
            className="bg-transparent"
            startContent={<FaceBookIcon className={"w-8 fill-white"} />}
          />
          <Button
            as={Link}
            href="https://instagram.com"
            className="bg-transparent"
            startContent={<InstaIcon className={"w-8 stroke-white"} />}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
