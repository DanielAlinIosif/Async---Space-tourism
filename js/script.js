const body = document.querySelector("body");
body.textContent = "";

// functie pentru fetch date din data.json
async function loadJsonFile() {
  try {
    const response = await fetch("./data/data.json");
    const data = await response.json();
    return data;
  } catch (eroare) {
    console.log("Eroare la incarcacarea JSON: ", eroare);
  }
}

// let linksData = [
//   {
//     text: "00 HomeN",
//     url: "./",
//   },
//   {
//     text: "01 Destination",
//     url: "./destination",
//   },
//   {
//     text: "02 Crew",
//     url: "./crew",
//   },
//   {
//     text: "03 Technology",
//     url: "./technology",
//   },
// ];

function createAndAppendLink(text, url, parent) {
  // crearea si initializarea <a>-urilor
  const link = document.createElement("a");
  link.textContent = text;
  link.setAttribute("href", url);

  //crearea si intializarea <li>-urilor
  const liElement = document.createElement("li");
  liElement.appendChild(link);
  parent.appendChild(liElement);
}

async function initializarePagina() {
  const data = await loadJsonFile();
  console.log(data);

  if (data) {
    // creare header
    const header = document.createElement("header");

    //creare si adaugare logo
    const logo = document.createElement("img");
    logo.src = "../assets/shared/logo.svg";
    header.appendChild(logo);

    // Creare si adaugare nav si ul
    const ulElement = document.createElement("ul");
    const navElement = document.createElement("nav");

    data.linksData.forEach((linkData) => {
      return createAndAppendLink(linkData.text, linkData.url, ulElement);
    });

    navElement.appendChild(ulElement);
    header.appendChild(navElement);
    body.appendChild(header);

    // -------------------------------------
    // creare si adaugare upTitle
    const upTitle = document.createElement("h4");
    upTitle.textContent = data.home.upTitle;
    body.appendChild(upTitle);

    // creare si adaugare title
    const title = document.createElement("h1");
    title.textContent = data.home.title;
    body.appendChild(title);

    // creare si adaugare paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = data.home.paragraph;
    body.appendChild(paragraph);

    // creare si adaugare explore btn
    const exploreBtn = document.createElement("button");
    exploreBtn.textContent = data.home.exploreBtn;
    body.appendChild(exploreBtn);
  }
}

initializarePagina();
