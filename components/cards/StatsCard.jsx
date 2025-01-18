const StatsCard = ({ title, value, subText, bgColor, subTextColor }) => (
    <div className={`h-[136px] rounded-lg ${bgColor} p-4 flex flex-col justify-between`}>
      <span className="font-medium text-lg">{title}</span>
      <h2 className="font-medium text-4xl">{value}</h2>
      <span className={`text-base ${subTextColor}`}>{subText}</span>
    </div>
  );

  export default StatsCard