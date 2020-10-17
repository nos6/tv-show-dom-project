//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  for (let i=0; i < episodeList.length;i++){
  let divElement = document.createElement("div");
 divElement.style.backgroundColor = "black";
 divElement.style.border = "2px solid #ff8a00";
 rootElem.style.textAlign = "center";
 divElement.style.
  let headName = document.createElement("h4");
  headName.textContent= episodeList[i].name + " -" + " S" + episodeList[i].season + "E" + episodeList[i].number ;
  divElement.appendChild(headName);

  let imageTag = document.createElement("img");
  imageTag.src= episodeList[i].image.medium ;
  divElement.appendChild(imageTag);

  let textParagraph = document.createElement("p");
    textParagraph.innerHTML =episodeList[i].summary;
    divElement.appendChild(textParagraph);

    rootElem.appendChild(divElement);



  }
}

window.onload = setup;
