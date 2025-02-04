const ButtonSection = ({ text, href, className }) => {
  return (
    <a
      href={href}
      className={`inline-block px-8 py-4 bg-black text-white rounded-lg font-Inter text-sm font-semibold hover:bg-gray-800 mt-4`}
    >
      {text}
    </a>
  );
};

export default ButtonSection;
