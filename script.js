//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
 rootElem.textContent =`Got ${episodeList.length} episode(s)`
  for (let i=0; i < episodeList.length;i++){
  let divElement = document.createElement("div");
 divElement.style.backgroundColor = "green";
  let headName = document.createElement("h4");
  headName.textContent= episodeList[i].name + episodeList[i].season + episodeList[i].number ;
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
