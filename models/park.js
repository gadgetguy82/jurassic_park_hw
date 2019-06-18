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
  let speciesList = [];
  for (let dino of this.collectionOfDinosaurs) {
    if (dino.species === species) {
      speciesList.push(dino);
    }
  }
  return speciesList;
}

Park.prototype.removeBySpecies = function (species) {
  let removeList = this.findBySpecies(species);
  for (let dino of removeList) {
    this.removeDinosaur(dino);
  }
}

Park.prototype.calculateTotalVisitorsPerDay = function () {
  let totalVisitors = 0;
  for (let dino of this.collectionOfDinosaurs) {
    totalVisitors += dino.guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.calculateTotalVisitorsPerYear = function () {
  return this.calculateTotalVisitorsPerDay() * 365;
}

Park.prototype.calculateTotalRevenuePerYear = function () {
  return this.calculateTotalVisitorsPerYear() * this.ticketPrice;
}

module.exports = Park;
