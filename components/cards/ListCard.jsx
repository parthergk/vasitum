const ListCard = ({ title, items, buttonText, date }) => (
    <div className="border border-neutral-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="text-sm text-gray-500 border border-neutral-300 px-3 py-1 rounded-md">
          {date}
        </span>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start p-3 rounded-md border border-gray-300 bg-gray-100"
          >
            <p className="text-base">{item.title}</p>
            <span className="text-xs text-gray-500">{item.time}</span>
          </div>
        ))}
      </div>
      {buttonText && (
        <button className="text-red-500 text-sm mt-4 text-center w-full">{buttonText}</button>
      )}
    </div>
  );

  export default ListCard;