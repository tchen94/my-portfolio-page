import { PhotoArray } from "@/types/types";
import Image from "next/image";
import { ReactNode } from "react";

export default function TechStack({ techArray }: { techArray: PhotoArray }): ReactNode {
  return (
    <>
      {techArray.map((tech) => (
        <Image
          key={tech.alt}
          className={tech.className}
          src={tech.src}
          alt={tech.alt}
          width={tech.width}
          height={tech.height}
        />
      ))}
    </>
  );
}
