import React, { useEffect, useState } from "react";

interface NameCellProps {
  name: string;
}

const NameCell: React.FC<NameCellProps> = ({ name }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex gap-2 items-center">
      {isMounted ? (
        <img
          className="h-10 w-10"
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
          alt="user-image"
        />
      ) : (
        <div className="h-10 w-10 bg-gray-200"></div>
      )}
      <p>{name}</p>
    </div>
  );
};

export default NameCell;
