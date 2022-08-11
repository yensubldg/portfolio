import Facebook from "~/images/facebook.svg";
import Twitter from "~/images/twitter.svg";
import Github from "~/images/github.svg";

const DefaultFooter = () => {
  const social = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yensubldg1",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/yensubldg",
    },
  ];
  return (
    <footer className="flex items-center justify-between border-t border-t-wrapper">
      <div className="flex justify-start items-center">
        <div className="py-2 pl-5 pr-4.5 text-primary text-base leading-5">
          find me in:
        </div>
        <ul className="flex items-center justify-start">
          {social.map(({ name, icon, url }) => (
            <li key={name} className="py-2 px-4 border-x border-x-wrapper">
              <a href={url} className="flex items-center" target={"_blank"}>
                <img src={icon} alt={name} className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-5 pr-4.5 py-2 text-primary text-base leading-5 flex items-center justify-end border-l border-wrapper">
        <span className="mr-1">@yensubldg</span>
        <a href="https://github.com/yensubldg" target={"_blank"}>
          <img src={Github} alt="Yensubldg" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default DefaultFooter;
