const assert = require('assert');
const Record = require('../record.js');
const RecordStore = require('../record_store.js');

describe('Record', function(){

  let record1
  let record2
  let record3
  let record4
  let record5
  let inventory
  let recordStore

  beforeEach(function(){
    record1 = new Record('Oasis', 'Definitely Maybe', 'BritPop', 10);
    record2 = new Record('Bieber', 'BieberBeliever', 'Shite', 1);
    record3 = new Record('Blur', 'Parklife', 'Britpop', 8);
    record4 = new Record('Motorhead', 'Best of Motorhead - RIP Lemmy', 'Rock', 12);
    record5 = new Record('Snow Patrol', 'Eyes Open', 'Indie Rock', 5);
    inventory = [record1, record2, record3, record4, record5];
    recordStore =  new RecordStore('Big Dawg Records', 'Edinburgh', 500, inventory);
  }) // beforeEach ending

  xit('Can sell record and adjust store balance', function(){

    assert.deepStrictEqual(actual, record_store.canSellRecord());
  }); // test ending

  xit('Can return total stock value', function(){

    assert.deepStrictEqual(actual, record_store.totalStockValue());
  }); // test ending

  xit('Can view all records of a genre in stock', function(){

    assert.deepStrictEqual(actual, record_store.genreRecords());
  }); // test ending




}); // wrapper ending
