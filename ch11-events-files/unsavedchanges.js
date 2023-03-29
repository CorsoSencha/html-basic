window.onload = function() {
  $("beercounter").onmouseover = countBeers;
};

function countBeers() {
  $("beercounter").innerHTML = (--beerCount) + " bottles of beer";
}
