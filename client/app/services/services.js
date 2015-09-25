angular.module('concentrate.services', [])

.factory('Game', function($window, $http, $location) {

  var pairs = {
    "2clubs.png" : "2spades.png",
    "2diamonds.png" : "2hearts.png",
    "3clubs.png" : "3spades.png",
    "3diamonds.png" : "3hearts.png",
    "4clubs.png" : "4spades.png",
    "4diamonds.png" : "4hearts.png",
    "5clubs.png" : "5spades.png",
    "5diamonds.png" : "5hearts.png",
    "6clubs.png" : "6spades.png",
    "6diamonds.png" : "6hearts.png",
    "7clubs.png" : "7spades.png",
    "7diamonds.png" : "7hearts.png",
    "8clubs.png" : "8spades.png",
    "8diamonds.png" : "8hearts.png",
    "9clubs.png" : "9spades.png",
    "9diamonds.png" : "9hearts.png",
    "10clubs.png" : "10spades.png",
    "10diamonds.png" : "10hearts.png",
    "aceclubs.png" : "acespades.png",
    "acediamonds.png" : "acehearts.png",
    "jackclubs.png" : "jackspades.png",
    "jackdiamonds.png" : "jackhearts.png",
    "kingclubs.png" : "kingspades.png",
    "kingdiamonds.png" : "kinghearts.png",
    "queendiamonds.png" : "queenhearts.png"
  }
  var keys = [];
  for(var key in pairs) {
    if(pairs.hasOwnProperty(key)) {
      keys.push(key)
    }
  }
  console.log("keys ", keys, keys.length)
  var match = function(cardOne, cardTwo) {

    return pairs[cardOne] === cardTwo || pairs[cardTwo] === cardOne? true : false;
  }
  function shuffleArray(array, width) {
    console.log("shuffling array", width)
    for (var i = width - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  //shuffle the array and take the first three.
  var getPairs = function(number){
    keys = shuffleArray(keys, 25);
    console.log("keys ", keys, keys.length)
    //loop through keys randomly, grab number
    var cardObj = {};
    for(var i = 0; i < number; i ++) {

    var property = keys[i];
    cardObj[property] = pairs[property];

    }
    console.log(cardObj);
    return cardObj
  }


  return {
    match: match,
    shuffleArray: shuffleArray,
    getPairs: getPairs
  }
})

