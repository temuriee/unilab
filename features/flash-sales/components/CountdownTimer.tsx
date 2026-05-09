import { useCountdown } from "../hooks/useCountdown";

interface CountdownTimerProps {
  endsAt: Date;
}

export function CountdownTimer({ endsAt }: CountdownTimerProps) {
  const { hours, minutes, seconds } = useCountdown(endsAt);

  return (
    <div className="flex flex-col lg:flex-col items-center gap-1 w-full md:flex-row md:justify-center md:gap-2">
      <p className="text-xs text-gray-400 font-medium tracking-wide">
        Deal of the Day
      </p>
      <div className="flex items-center gap-1">
        {[
          { value: hours, label: "hour" },
          { value: minutes, label: "min" },
          { value: seconds, label: "sec" },
        ].map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-1">
            <div className="flex flex-col items-center">
              <span className="text-lg font-extrabold text-gray-800 leading-none tabular-nums">
                {value}
              </span>
              <span className="text-[10px] text-gray-400">{label}</span>
            </div>
            {i < 2 && (
              <span className="text-gray-400 font-bold text-sm mb-3">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
