//You can edit ALL of the code here
let allEpisodes;
let allShows ;
function setup() {
  // const allEpisodes = getAllEpisodes();
  
 allShows = getAllShows();
 console.log(allShows);
  fetch ("https://api.tvmaze.com/shows/82/episodes")
.then(res => {
  return res.json();
})
.then(data => {
  allEpisodes = data ;
  makePageForEpisodes(allEpisodes);
  selectEpisode();

})
selectShows();
}
//const allEpisodes = getAllEpisodes();


function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent =`got ${episodeList.length} episode(s)`
  for (let i=0; i < episodeList.length;i++){
  let divElement = document.createElement("div");
  divElement.className='tClose';
 //divElement.style.border = "2px solid #ff8a00";
// rootElem.style.textAlign = "center";
 
  let headName = document.createElement("h4");
  headName.textContent= " S" + episodeList[i].season + "E" + episodeList[i].number + " - " +episodeList[i].name;
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

let searchBar = document.getElementById("sehText");
searchBar.addEventListener("keyup", function(event){
  input(event.target.value.toLowerCase()) 
})

function input(LookForEpisode){

  let arrayForAllEpisode = allEpisodes.filter(episode => {
  return episode.name.toLowerCase().includes(LookForEpisode) || episode.summary.toLowerCase().includes(LookForEpisode)

  })
  makePageForEpisodes(arrayForAllEpisode);
}

function selectEpisode(){

  for(let i=0 ; i < allEpisodes.length; i++){
    let chooseEpisode = document.getElementById("dropList");
    let option = document.createElement("option");
    option.value= i 
    option.textContent = `S ${allEpisodes[i].season} -  E ${allEpisodes[i].number} - ${allEpisodes[i].name}` ;
    chooseEpisode.appendChild(option);

  }
}

function selectShows(){

  for(let i=0 ; i < allShows.length; i++){
    let chooseShows = document.getElementById("drop");
    let option = document.createElement("option");
    option.value= i 
    option.textContent = `${allShows[i].name}` ;
    chooseShows.appendChild(option);

  }
}
window.onload = setup;

