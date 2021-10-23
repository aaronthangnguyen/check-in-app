import { Button } from "@chakra-ui/button";
import React, { useState } from "react";

const Admin = () => {
  const [isLocked, setIsLocked] = useState(true);
  const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleClick = () => {
    if (isLocked) {
      const input = prompt("Please enter password:");
      if (input === password) {
        setIsLocked(false);
      } else {
        console.log("Error.");
      }
    } else {
      setIsLocked(true);
    }
  };
  return (
    <>
      {/* Admin Panel */}
      {!isLocked && (
        <>
          <Button>Export JSON</Button>
          <Button>Export Excel</Button>
          <Button>Reset</Button>
        </>
      )}

      {/* Lock / Unlock */}
      <Button colorScheme={isLocked ? "gray" : "teal"} onClick={handleClick}>
        {isLocked ? "Unlock" : "Lock"}
      </Button>
    </>
  );
};

export default Admin;
