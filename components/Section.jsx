const Section = ({ title, items }) => (
    <div className="flex flex-col justify-center sm:items-center md:items-start">
      <span className="text-[#686868] font-medium sm:text-[10px] md:text-xs">{title}</span>
      {items.map(({ name, icon: Icon }) => (
        <div key={name} className="space-x-6 py-4 flex text-[#686868] cursor-pointer hover:text-[#909090]">
          <Icon className="w-6 h-6" />
          <span className="text-base sm:hidden md:block">{name}</span>
        </div>
      ))}
    </div>
  );

  export default Section