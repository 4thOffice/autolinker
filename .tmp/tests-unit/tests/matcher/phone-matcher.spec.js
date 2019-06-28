"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phone_matcher_1 = require("../../src/matcher/phone-matcher");
var anchor_tag_builder_1 = require("../../src/anchor-tag-builder");
var match_checker_1 = require("../match/match-checker");
var src_1 = require("../../src");
describe("Autolinker.matcher.Phone", function () {
    var matcher;
    beforeEach(function () {
        matcher = new phone_matcher_1.PhoneMatcher({
            tagBuilder: new anchor_tag_builder_1.AnchorTagBuilder()
        });
    });
    describe('parseMatches()', function () {
        it('should return an empty array if there are no matches for phone numbers', function () {
            expect(matcher.parseMatches('')).toEqual([]);
            expect(matcher.parseMatches('asdf')).toEqual([]);
            expect(matcher.parseMatches('123')).toEqual([]);
        });
        it('should return an array of a single phone number match when the string is the phone number itself', function () {
            var matches = matcher.parseMatches('(123) 456-7890');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectPhoneMatch(matches[0], '1234567890', 0);
        });
        it('should return an array of a single phone number match when the phone number is in the middle of the string', function () {
            var matches = matcher.parseMatches('Hello (123) 456-7890 my good friend');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectPhoneMatch(matches[0], '1234567890', 6);
        });
        it('should return an array of a single phone number match when the phone number is at the end of the string', function () {
            var matches = matcher.parseMatches('Hello (123) 456-7890');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectPhoneMatch(matches[0], '1234567890', 6);
        });
        it('should return an array of multiple phone numbers when there are more than one within the string', function () {
            var matches = matcher.parseMatches('Talk to (123) 456-7890 or (234) 567-8901');
            expect(matches.length).toBe(2);
            match_checker_1.MatchChecker.expectPhoneMatch(matches[0], '1234567890', 8);
            match_checker_1.MatchChecker.expectPhoneMatch(matches[1], '2345678901', 26);
        });
        it('a match within parenthesis should be parsed correctly', function () {
            var matches = matcher.parseMatches('Hello ((123) 456-7890)');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectPhoneMatch(matches[0], '1234567890', 7);
        });
    });
    describe('getPhoneNumber()', function () {
        it("should should return the matched phone number without any \n\t\t\t formatting", function () {
            var matches = matcher.parseMatches('Talk to (123) 456-7890');
            expect(matches.length).toBe(1);
            expect(matches[0]).toEqual(jasmine.any(src_1.PhoneMatch));
            expect(matches[0].getPhoneNumber()).toBe('1234567890');
        });
    });
    describe('getNumber()', function () {
        it("as an alias of getPhoneNumber(), should return the matched phone \n\t\t\t number, without any formatting", function () {
            var matches = matcher.parseMatches('Talk to (123) 456-7890');
            expect(matches.length).toBe(1);
            expect(matches[0]).toEqual(jasmine.any(src_1.PhoneMatch));
            expect(matches[0].getNumber()).toBe('1234567890');
        });
    });
});
