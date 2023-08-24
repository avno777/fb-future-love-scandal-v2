import { useState } from "react";
import { scrapeHtmlWeb } from "scrape-html-web";

const Scrapper = () => {
  const options = {
    url: "https://nodejs.org/en/blog/",
    mainSelector: ".blog-index",
    childrenSelector: [
      {
        key: "date",
        selector: "time",
        type: "text",
        replace: (text) => text + " 2022",
        /* I pass a custom function that adds the
      "2022" test to the date I get from the selector */
      },
      {
        key: "version",
        selector: "a",
        type: "html",
        replace: /[{()}]/g,
        /* I pass a regex to remove
      the round paraesthesia within the html */
      },
      {
        key: "link",
        selector: "a",
        attr: "href",
      },
    ],
  };

  (async () => {
    const data = await scrapeHtmlWeb(options);

    console.log("example 2 :", data);
  })();
  return (
    <div>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 bg-blue-200 p-4">Tall Content</div>
        <div class="bg-green-200 p-4">Short Content</div>
        <div class="bg-red-200 p-4">Short Content</div>
        <div class="col-span-2 bg-yellow-200 p-4">Tall Content</div>
        <div class="bg-pink-200 p-4">Short Content</div>
        <div class="bg-purple-200 p-4">Short Content</div>
      </div>
    </div>
  );
};
export default Scrapper;
