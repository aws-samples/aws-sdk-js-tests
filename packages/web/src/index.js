import { getBrowserResponse } from "@aws-sdk/test-utils";

const getHTMLElement = (title, content) => {
  const element = document.createElement("div");
  element.style.margin = "30px";

  const titleDiv = document.createElement("div");
  titleDiv.innerHTML = title;
  const contentDiv = document.createElement("textarea");
  contentDiv.rows = 20;
  contentDiv.cols = 50;
  contentDiv.innerHTML = content;

  element.appendChild(titleDiv);
  element.appendChild(contentDiv);

  return element;
};

const component = async () => {
  const response = await getBrowserResponse();
  return getHTMLElement("Data returned:", JSON.stringify(response, null, 2));
};

(async () => {
  document.body.appendChild(await component());
})();
