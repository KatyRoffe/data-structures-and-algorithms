'use strict';

const animal = require('./animalShelter/animalShelterQueue.js');

const dog = new animal.animal('dog');
const cat = new animal.animal('cat');
const bird = new animal.animal('bird');

describe('tests for animal shelter code', () => {

  const animalShelter = new animal.animalShelter();

  animalShelter.enqueue(cat);
  animalShelter.enqueue(dog);
  animalShelter.enqueue(bird);
  animalShelter.enqueue(dog);
  animalShelter.enqueue(cat);


  it('tests if a cat is dequeued', () => {

    expect(animalShelter.dequeue('cat')).toEqual('cat');
  });


  it('tests if a dog is dequeued', () => {

    expect(animalShelter.dequeue('dog')).toEqual('dog');
  });


  it('tests if only dogs and cats are in the queue', () => {

    expect(animalShelter.enqueue(bird)).toEqual('enter cat or dog');
  });

});
