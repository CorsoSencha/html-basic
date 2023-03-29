var beerCount = 99;

window.onload = function() {
  $("beercounter").observe("mouseover", countBeers);
};

function countBeers() {
  $("beercounter").innerHTML = (--beerCount) + " bottles of beer";
}
