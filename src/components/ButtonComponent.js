import React from 'react'
import { Button } from '@mantine/core';
function ButtonComponent() {
  return (
    <Button fullWidth variant="outline" style={{
        marginTop: "40px",
        width: "200px",
        borderRadius: "50px", // Rounded corners
        backgroundColor: "#17171e", // Background color
        border: "2px solid #665DC3", // Border color
        color: "white", // Text color
        fontSize: "20px", // Set font size
      }}
    >
     Browse my files
  </Button>
  )
}

export default ButtonComponent