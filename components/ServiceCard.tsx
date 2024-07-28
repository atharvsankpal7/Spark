import { Service } from "@/types";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { Highlight } from "./ui/hero-highlight";
import { Button } from "@/components/ui/moving-border";

export const ServiceCard: React.FC<Service> = ({
  title,
  description,
  image,
}) => {
  return (
    <CardContainer className="inter-var w-full ">
      <CardBody className=" relative group/card   dark:hover:shadow-2xl  hover:shadow-emerald-500/[0.1] bg-blue-300 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-2  ">
        <CardItem translateZ="50" className="text-xl font-bold  text-black">
          <Highlight>{title}</Highlight>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-slate-900"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl my-4"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
