import React from "react";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import {
  FaDiscord,
  FaSquareXTwitter,
  FaReddit,
  FaInstagram,
} from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    { Icon: IoLogoLinkedin, url: "https://linkedin.com/company/ieee-gnitc", color: "#0077B5" },
    { Icon: IoLogoYoutube, url: "https://www.youtube.com/channel/UCrG5uoqFoiS31ZauRihrQXA", color: "#FF0000" },
    { Icon: FaInstagram, url: "https://www.instagram.com/ieee_gni/", color: "#E4405F" },
    { Icon: FaSquareXTwitter, url: "https://twitter.com/IEEE_GNITC", color: "#1DA1F2" },
    { Icon: FaReddit, url: "https://www.reddit.com/r/ieee_gnitc/", color: "#FF4500" },
    { Icon: IoLogoWhatsapp, url: "https://wa.me/918008243308", color: "#25D366" },
    { Icon: IoLogoGithub, url: "https://github.com/IEEE-GNITC", color: "#181717" },
    { Icon: FaDiscord, url: "https://discord.gg/4G3jXV7", color: "#5865F2" },
  ];

  return (
    <footer id="contact" className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-16">
        
        {/* About */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
            Get to Know Us
          </h4>
          <p className="uppercase font-medium mb-2">
            Gurunanak Institutions
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Ibrahimpatnam, Ranga Reddy, Hyderabad – 501506, Telangana, India
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
            Contact
          </h4>
          <p className="text-sm mb-3">
            <span className="font-semibold">Email:</span> ieee_gnitc@gniindia.org
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">Abhinav Erolla</p>
              <p className="text-sm">abhinaverolla7@gmail.com</p>
              <p className="text-sm">📞 +91 96183 86000</p>
            </div>
            <div>
              <p className="text-sm font-semibold">P R S Santosh Naidu</p>
              <p className="text-sm">prssn.raja@gmail.com</p>
              <p className="text-sm">📞 +91 70753 51027</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
            Connect With Us
          </h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ Icon, url, color }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-300 hover:scale-110 group"
              >
                <Icon
                  className="text-xl text-white transition-colors duration-300 group-hover:text-current"
                  style={{ "--tw-text-opacity": 1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Bar */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center">
        <p className="text-xs tracking-wide text-gray-400">
          ALL RIGHTS RESERVED | © <span className="font-bold text-white">IEEE GNI</span>
        </p>
      </div>
    </footer>
  );
}
