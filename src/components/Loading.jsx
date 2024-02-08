import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className=" w-full h-full bg-opacity-50 flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loading;
