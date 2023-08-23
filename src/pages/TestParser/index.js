import React from "react";
import Parser from "html-react-parser";

const TestParser = () => {
  const html =
    '<a href="https://www.facebook.com/photo/?fbid=10222242815369673">Visit our Facebook Page</a>';

  return (
    <div>
      <h2>Facebook Link</h2>
      {Parser(html)}
    </div>
  );
};

export default TestParser;
