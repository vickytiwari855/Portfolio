import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [Frontend, setFrontend] = useState(0);
  const [Backend, setBackend] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Frontend < 80) {
        setFrontend((prevCount) => prevCount + 1);
      }
      if (Backend < 37) {
        setBackend((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [Frontend, Backend]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">MERN</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={Frontend}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">Frontend </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={Backend}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">Backend</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
