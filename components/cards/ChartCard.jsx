import { LineChart, Line, ResponsiveContainer } from "recharts";

const ChartCard = ({ title, value, details, chartData, strokeColor, percentageChange }) => (
    <div className="flex justify-between border border-neutral-200 rounded-lg p-4 h-[190px]">
      <div className="flex flex-col justify-between">
        <span className="font-medium text-lg">{title}</span>
        <h2 className="font-medium text-5xl mt-2">{value}</h2>
        <div className="mt-2">
          {details.map((detail, index) => (
            <p key={index} className="text-xs text-[#686868]">
              {detail}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="value" stroke={strokeColor} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <span className="text-green-500 text-sm">{percentageChange}</span>
      </div>
    </div>
  );

  export default ChartCard