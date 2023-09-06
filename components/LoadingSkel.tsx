import { Loader2 } from "lucide-react";
import { FC } from "react";

interface LoadingSkelProps {}

const LoadingSkel: FC<LoadingSkelProps> = ({}) => {
  return <Loader2 className="w-10 h-10 animate-spin dark:text-slate-200" />;
};

export default LoadingSkel;
