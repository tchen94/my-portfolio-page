import getCurrentYear from "../utils/utils";

const Footer = () => {
  return (
    <footer className="text-xs flex md:justify-end justify-center pt-10 md:mr-10 right-5 sticky md:top-[95vh]">
       {`© ${getCurrentYear()} - All Rights Reserved`}
    </footer>
  );
};

export default Footer;
