'use strict';

describe('Junior test for TemplateMonster', function () {


    describe('New post', function () {

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            browser.get('/');
        });


        it('should add new post to the page', function () {
            var titleText = element(by.css('[placeholder="Title"]'));
            var noteText = element(by.css('[placeholder="Take a note"]'));
            var doneButton = element(by.css('[type="submit"]'));
            var expectTitle = element(by.xpath('//note-card[4]/div/div[2]'));
            titleText.sendKeys('Hi Pedro');
            noteText.sendKeys('You have any glasses');
            doneButton.click();
            expect(expectTitle.getText()).toMatch(titleText.getText());
        });

        it('"Settings" button should be clickable', function () {
            var settingsButton = element(by.xpath('//div/span[1]'));
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(settingsButton), 5000, 'Element not clickable');
        });

        it('"SINGOUT" button should be clickable', function () {
            var singuotButton = element(by.xpath('//header/nav/div/span[2]'))
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(singuotButton), 5000, 'Element not clickable');
        });

        it('element should be present', function () {
            var headersOfPosts = $$('.col-xs-4').then(function (list) {
                for (var i = 0; i < list.length; i++) {
                    expect(list[i].isPresent);
                }
            });
        });

        it('check box should be present', function () {
            var firstCheckBoxButton = element(by.xpath('//div/note-card[1]/div/div[1]/i'))
            var secondCheckBoxButton = element(by.xpath('//div/note-card[2]/div/div[1]/i'))
            var thirdCheckBoxButton = element(by.xpath('//div/note-card[3]/div/div[1]/i'))
            var headersOfPosts = $$('.col-xs-4').then(function (list) {
                for (var i = 0; i < list.length; i++) {
                    browser.actions().mouseMove(list[0]).perform()
                    expect(firstCheckBoxButton.isPresent)
                    browser.actions().mouseMove(list[1]).perform()
                    expect(secondCheckBoxButton.isPresent)
                    browser.actions().mouseMove(list[2]).perform()
                    expect(thirdCheckBoxButton.isPresent)
                }
            })
        });

        it('check button should be clickable', function () {
            var firstCheckBoxButton = element(by.xpath('//div/note-card[1]/div/div[1]/i'))
            var secondCheckBoxButton = element(by.xpath('//div/note-card[2]/div/div[1]/i'))
            var thirdCheckBoxButton = $('.material-icons')
            var headersOfPosts = $$('.col-xs-4').then(function (list) {
                for (var i = 0; i < list.length; i++) {
                    browser.actions().mouseMove(list[0]).perform()
                    firstCheckBoxButton.click()
                    expect(list[0].isPresent).toBeFalsy()
                    browser.actions().mouseMove(list[1]).perform()
                    secondCheckBoxButton.click
                    expect(list[1].isPresent).toBeFalsy()
                    browser.actions().mouseMove(list[2]).perform()
                    thirdCheckBoxButton.click()
                    expect(list[2].isPresent).toBeFalsy()
                }
            })
        })

    });
});


