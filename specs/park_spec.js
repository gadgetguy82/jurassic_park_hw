const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park, dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic Park", 30);
    t_bone = new Dinosaur('T-rex', 'carnivore', 50);
    grimlock = new Dinosaur('T-rex', 'carnivore', 55);
    rex = new Dinosaur('T-rex', 'carnivore', 60);
    spike = new Dinosaur('Triceratops', 'herbivore', 30);
    stegz = new Dinosaur('Stegosaurus', 'herbivore', 25);
    hard_rock = new Dinosaur('Ankylosaurus', 'herbivore', 28);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(t_bone);
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(t_bone);
    park.addDinosaur(spike);
    park.removeDinosaur(t_bone);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [spike]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(t_bone);
    park.addDinosaur(spike);
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, t_bone);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(t_bone);
    park.addDinosaur(spike);
    park.addDinosaur(grimlock);
    park.addDinosaur(stegz);
    park.addDinosaur(rex);
    park.addDinosaur(hard_rock);
    const actual = park.findBySpecies("T-rex");
    assert.deepStrictEqual(actual, [t_bone, grimlock, rex]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(t_bone);
    park.addDinosaur(spike);
    park.addDinosaur(grimlock);
    park.addDinosaur(stegz);
    park.addDinosaur(rex);
    park.addDinosaur(hard_rock);
    park.removeBySpecies("T-rex");
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [spike, stegz, hard_rock]);
  });

});
