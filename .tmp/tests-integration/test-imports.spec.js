"use strict";
// This file simply makes sure that we can import Autolinker entities using the
// 'autolinker' package installed into node_modules
// To run this test, run: 
//     yarn test
// This will install the package locally in ./.tmp/, and build this file.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var autolinker_1 = tslib_1.__importStar(require("autolinker"));
describe('Autolinker imports tests - ', function () {
    it("Autolinker should be the default export of 'autolinker'", function () {
        expect(autolinker_1.default).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.default.link).toEqual(jasmine.any(Function));
        expect(autolinker_1.default.link('Hello google.com', { newWindow: false }))
            .toBe('Hello <a href="http://google.com">google.com</a>');
    });
    it("Autolinker should also be a named export of 'autolinker'", function () {
        expect(autolinker_1.Autolinker).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.Autolinker.link).toEqual(jasmine.any(Function));
    });
    it("AnchorTagBuilder should be a named export of 'autolinker'", function () {
        expect(autolinker_1.AnchorTagBuilder).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.AnchorTagBuilder.prototype.build).toEqual(jasmine.any(Function));
    });
    it("AnchorTagBuilder should be a named export of 'autolinker'", function () {
        expect(autolinker_1.HtmlTag).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.HtmlTag.prototype.getTagName).toEqual(jasmine.any(Function));
    });
    it("The 'Match' classes should be named exports of 'autolinker'", function () {
        expect(autolinker_1.Match).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.Match.name).toBe('Match'); // function name
        expect(autolinker_1.Match.prototype.getMatchedText).toEqual(jasmine.any(Function));
        expect(autolinker_1.EmailMatch).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.EmailMatch.name).toBe('EmailMatch'); // function name
        expect(autolinker_1.EmailMatch.prototype.getEmail).toEqual(jasmine.any(Function));
        expect(autolinker_1.HashtagMatch).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.HashtagMatch.name).toBe('HashtagMatch'); // function name
        expect(autolinker_1.HashtagMatch.prototype.getHashtag).toEqual(jasmine.any(Function));
        expect(autolinker_1.MentionMatch).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.MentionMatch.name).toBe('MentionMatch'); // function name
        expect(autolinker_1.MentionMatch.prototype.getMention).toEqual(jasmine.any(Function));
        expect(autolinker_1.PhoneMatch).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.PhoneMatch.name).toBe('PhoneMatch'); // function name
        expect(autolinker_1.PhoneMatch.prototype.getNumber).toEqual(jasmine.any(Function));
        expect(autolinker_1.UrlMatch).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.UrlMatch.name).toBe('UrlMatch'); // function name
        expect(autolinker_1.UrlMatch.prototype.getUrl).toEqual(jasmine.any(Function));
    });
    it("The 'Matcher' classes should be named exports of 'autolinker'", function () {
        expect(autolinker_1.Matcher).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.Matcher.name).toBe('Matcher'); // function name
        // Note: no methods which can be checked here - abstract methods are not compiled into ES5
        expect(autolinker_1.EmailMatcher).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.EmailMatcher.name).toBe('EmailMatcher'); // function name
        expect(autolinker_1.EmailMatcher.prototype.parseMatches).toEqual(jasmine.any(Function));
        expect(autolinker_1.HashtagMatcher).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.HashtagMatcher.name).toBe('HashtagMatcher'); // function name
        expect(autolinker_1.HashtagMatcher.prototype.parseMatches).toEqual(jasmine.any(Function));
        expect(autolinker_1.MentionMatcher).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.MentionMatcher.name).toBe('MentionMatcher'); // function name
        expect(autolinker_1.MentionMatcher.prototype.parseMatches).toEqual(jasmine.any(Function));
        expect(autolinker_1.PhoneMatcher).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.PhoneMatcher.name).toBe('PhoneMatcher'); // function name
        expect(autolinker_1.PhoneMatcher.prototype.parseMatches).toEqual(jasmine.any(Function));
        expect(autolinker_1.UrlMatcher).toEqual(jasmine.any(Function)); // constructor function
        expect(autolinker_1.UrlMatcher.name).toBe('UrlMatcher'); // function name
        expect(autolinker_1.UrlMatcher.prototype.parseMatches).toEqual(jasmine.any(Function));
    });
});
