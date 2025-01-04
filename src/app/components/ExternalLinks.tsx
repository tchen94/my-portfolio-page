import Image from "next/image";

export const ExternalLinks = () => {
  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-start">
      <a
        className="flex items-center gap-2 "
        href="https://www.linkedin.com/in/tim-lun-chen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="transition duration-300 hover:scale-110 hover:animate-pulse"
          aria-hidden
          src="/linkedIn.svg"
          alt="LinkedIn icon"
          width={30}
          height={30}
        />
      </a>
      <a
        className="flex items-center gap-2"
        href="https://github.com/tchen94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="transition duration-300 hover:scale-110 hover:animate-pulse"
          aria-hidden
          src="/github.svg"
          alt="GitHub icon"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default ExternalLinks;
