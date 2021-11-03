import { Button } from "@chakra-ui/button";
import React, { useState } from "react";

const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleAuthorization = () => {
    if (!isAuthorized) {
      const input = prompt("Please enter password:");
      if (input === password) {
        setIsAuthorized(true);
      } else {
        console.log("Error.");
      }
    } else {
      setIsAuthorized(false);
    }
  };
  return (
    <>
      {/* Admin Panel */}
      {isAuthorized && (
        <>
          <Button>Export JSON</Button>
          <Button>Export Excel</Button>
          <Button>Reset</Button>
        </>
      )}

      {/* Lock / Unlock */}
      <Button
        colorScheme={isAuthorized ? "teal" : "gray"}
        onClick={handleAuthorization}
      >
        {isAuthorized ? "Unlock" : "Lock"}
      </Button>
    </>
  );
};

export default Admin;
