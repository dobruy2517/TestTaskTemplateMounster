'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Rozetka test suite', function() {


  describe('add product test', function() {

    beforeEach(function() {
      browser.ignoreSynchronization=true;
      browser.get('/');
    });


    it('should search for product', function() {
      var searchField = element(by.xpath('//*[@id="rz-search"]/form/div[1]/div[2]/input'));
      searchField.sendKeys("розетка");
      searchField.sendKeys(protractor.Key.ENTER);
        $('[name=topurchases]').click().then(function () {
        $('[name=plus]').click();
      })

      expect(elemen(by.css('div.cart-i-price>span.cart-uah')).getText()).
        toMatсh(/69/);
    });

  });
});
