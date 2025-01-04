import getCurrentYear from "../utils/utils";

const Footer = () => {
  return (
    <footer className="absolute inset-x-0 flex justify-end md:right-8 md:bottom-[10px]">
       {`© ${getCurrentYear()} - All Rights Reserved`}
    </footer>
  );
};

export default Footer;
