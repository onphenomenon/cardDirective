// // Page objects
var CardsPage = function() {
  this.cardsList = element.all(by.repeater('name in cards'));

  // this.get = function() {
  //   browser.get('/');
  // };
};

describe('cards easy game', function() {
  browser.get('#/easy');

  it("should load easy game page", function() {
    expect(browser.getTitle()).toBe('Concentration');
  });

  var cardsPage = new CardsPage();

  describe('cards page', function() {

    it('should have 12 cards', function() {
      expect(cardsPage.cardsList.count()).toEqual(12);
    });

    //it should only show card back on page load

    //it shows a card face when the card is clicked

    //it shows two card faces when the second card is clicked

    //it does not show a card face when a third card is clicked

    //it shows either match or cards flip to back side

  });

});
