import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <a
      href="https://www.tiktok.com/@mysolary4" // Redirect to TikTok profile
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Security attributes
      className={`flex items-center h-[3.5rem] px-16 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base cursor-pointer`} // Make it look clickable
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      Obejrzyj nasze filmiki na Tik Tok-u! 
    </a>
  );
};

export default Generating;
