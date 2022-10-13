import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div>
      <img
        src="https://picsum.photos/200"
        alt="user image"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span>Felicia </span>
        Mah
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around my-5 text-green-500 md:w-full">
        <a href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA">
          <AiFillYoutube className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA">
          <AiFillGithub className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA">
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex justify-center item-center">
          <GoLocation />
          <span>Singapore</span>
        </div>
        <p>e0564015@u.nus.edu</p>
        <p>+65 91125567</p>
      </div>
      {/* Email Button */}
      <button className="w-2/3 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Email Me
      </button>
      <button className="w-2/3 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
}
