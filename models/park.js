const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function (dino) {
  this.collectionOfDinosaurs.push(dino);
}

Park.prototype.removeDinosaur = function (dino) {
  indexOfDino = this.collectionOfDinosaurs.indexOf(dino);
  this.collectionOfDinosaurs.splice(indexOfDino, 1);
}

Park.prototype.mostPopularDino = function () {
  let mostGuests = 0, mostPopular;
  for (let dino of this.collectionOfDinosaurs) {
    if (dino.guestsAttractedPerDay > mostGuests) {
      mostGuests = dino.guestsAttractedPerDay;
      mostPopular = dino;
    }
  }
  return mostPopular;
}

Park.prototype.findBySpecies = function (species) {
  let species_list = [];
  for (let dino of this.collectionOfDinosaurs) {
    if (dino.species === species) {
      species_list.push(dino);
    }
  }
  return species_list;
}

Park.prototype.removeBySpecies = function (species) {
  let remove_list = this.findBySpecies(species);
  for (let dino of remove_list) {
    this.removeDinosaur(dino);
  }
}

module.exports = Park;
