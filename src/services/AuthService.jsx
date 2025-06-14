import { useState } from "react";

async function authRequest(username, password) {
    const credentials = btoa(`${username}:${password}`);
    
    try {
        const response = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: {
            "Authorization": `Basic ${credentials}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
  
        return true;
    } catch (err) {
        console.error(err.message);
    }
};

export { authRequest };