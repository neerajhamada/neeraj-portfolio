import { socialMedia } from "../data";

const Footer = () => {
  return (
    <footer
      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 mb-20 sm:mb-[100px] md:mb-0"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <p className="text-sm sm:text-base text-white/90 order-2 sm:order-1 mb-0">
            Copyright © {new Date().getFullYear()} Neeraj V S
          </p>

          <div className="flex items-center gap-3 sm:gap-4 order-1 sm:order-2">
            {socialMedia.map(info => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-lg
                         backdrop-blur-lg bg-white/5 border border-white/10
                         transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <img
                  src={info.img}
                  alt={`${info.id} icon`}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
