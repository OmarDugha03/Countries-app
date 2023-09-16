import LoadingSkel from "@components/LoadingSkel";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="flex items-center justify-center mt-52">
      <LoadingSkel />
    </div>
  );
};

export default loading;
