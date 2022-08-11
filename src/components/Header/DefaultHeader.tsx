const DefaultHeader = () => {
  const menu = [
    {
      label: "_hello",
      href: "/",
    },
    {
      label: "_about-me",
      href: "/about",
    },
    {
      label: "_projects",
      href: "/projects",
    },
  ];

  return (
    <header className="flex items-center justify-between border-b border-b-wrapper">
      <div className="py-4 pl-5 pr-36">
        <a href="/" className="text-base font-[450] text-primary">
          Yensubldg
        </a>
      </div>
      <nav className="flex-grow h-full">
        <ul className="w-full h-full flex items-center justify-start">
          {menu.map((item, index) => (
            <li key={index} className="">
              <a
                href={item.href}
                className="text-base font-[450] border-collapse border-x border-x-wrapper py-4 px-8 border-b-[3px] border-b-transparent hover:border-b-[#FEA55F] hover:text-white text-primary transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="py-4 px-6 border-l border-l-wrapper">
        <a href="/contact" className="text-base font-[450] text-primary">
          _contact
        </a>
      </div>
    </header>
  );
};

export default DefaultHeader;
