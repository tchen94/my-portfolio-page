import getCurrentYear from "../utils/utils";

const Footer = () => {
  return (
    <footer className="absolute text-xs inset-x-0 flex justify-end md:right-8 right-5 md:bottom-[10px]">
       {`© ${getCurrentYear()} - All Rights Reserved`}
    </footer>
  );
};

export default Footer;
