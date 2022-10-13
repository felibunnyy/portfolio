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
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Felicia </span>
        Mah
      </h3>
      <p className="bg-gray-200">Web Developer</p>
      <p>Download Resume</p>
      {/* social icons */}
      <div>
        <a href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA">
          <AiFillYoutube className="w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA">
          <AiFillGithub className="w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/channel/UCfST3COlxExYVWBCqm2UUxA">
          <AiFillLinkedin className="w-6 h-6" />
        </a>
      </div>

      {/* address */}
      <div>
        <div>
          <GoLocation />
          <span>Singapore</span>
        </div>
        <p>e0564015@u.nus.edu</p>
        <p>+65 91125567</p>
      </div>
      {/* Email Button */}
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
}
