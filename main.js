import "./style.css";
import platforms from "./platforms";

const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2Container");
const col3 = document.querySelector(".col3");

let url;

let openURL = (baseUrl, queryParam, query) => {
  if (queryParam && query) {
    url = baseUrl + queryParam + query;
  } else {
    url = baseUrl;
  }

  window.open(url, "_blank");
};

function getFaviconUrl(url) {
  const hostname = new URL(url).hostname;
  const googleFaviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;

  const fallbackFavicons = {
    "https://mail.google.com/mail/u/0/#search":
      "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
    "https://www.evernote.com/client/web":
      "https://www.evernote.com/favicon.ico",
    "https://www.google.com/maps/":
      "https://www.svgrepo.com/show/375444/google-maps-platform.svg",
    "https://www.google.com/finance/":
      "https://cdn-1.webcatalog.io/catalog/google-finance/google-finance-icon-filled-256.webp?v=1714773071984",
  };

  return fallbackFavicons[url] || googleFaviconUrl;
}

const clearColumns = () => {
  col1.innerHTML = "";
  col2.innerHTML = "";
  col3.innerHTML = "";
};

const getButton = () => {
  const createButton = (platform) => {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttonWrapper");

    const button = document.createElement("button");
    button.classList.add("button");

    const favicon = document.createElement("img");
    favicon.src = getFaviconUrl(platform.url);
    favicon.alt = `${platform.name} icon`;
    favicon.classList.add("favicon");

    button.appendChild(favicon);
    button.appendChild(document.createTextNode(platform.name));

    button.addEventListener("click", () => {
      const query = document.querySelector(".search")?.value || "";
      if (platform.queryParam && query) {
        openURL(platform.url, platform.queryParam, query);
      } else {
        button.classList.add("unsearchable");
        openURL(platform.url);
      }
    });

    buttonWrapper.appendChild(button);
    return buttonWrapper;
  };

  const createAccordion = (category, platformList, column) => {
    const accordionWrapper = document.createElement("div");
    const sanitizedCategory = category.replace(/[^a-zA-Z0-9-_]/g, "");
    accordionWrapper.classList.add("accordionWrapper", sanitizedCategory);

    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.innerText = category;

    const panel = document.createElement("div");
    panel.classList.add("panel");

    platformList.forEach((platform) => {
      const buttonWrapper = createButton(platform);
      panel.appendChild(buttonWrapper);
    });

    accordionWrapper.appendChild(accordion);
    accordionWrapper.appendChild(panel);
    column.appendChild(accordionWrapper);
  };

  clearColumns();

  for (const category in platforms.col1) {
    createAccordion(category, platforms.col1[category], col1);
  }

  if (platforms.col2) {
    platforms.col2.forEach((platform) => {
      const buttonWrapper = createButton(platform);
      col2.appendChild(buttonWrapper);
    });
  }

  for (const category in platforms.col3) {
    createAccordion(category, platforms.col3[category], col3);
  }
};

getButton();

document.querySelector(".search-icon").addEventListener("click", () => {
  const query = document.querySelector(".search").value.trim();
  const [prefix, ...rest] = query.split(" ");
  const queryText = rest.join(" ");

  const engines = {
    g: ["https://www.google.com", "/search?q="],
    yt: ["https://www.youtube.com", "/results?search_query="],
    mdn: ["https://developer.mozilla.org/en-US/search", "?q="],
    gh: ["https://github.com/search", "?q="],
  };

  if (engines[prefix]) {
    const [url, param] = engines[prefix];
    openURL(url, param, queryText); 
  } else {
    openURL("https://www.google.com", "/search?q=", query);
  }

  clearColumns();
});
