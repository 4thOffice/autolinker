"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashtag_matcher_1 = require("../../src/matcher/hashtag-matcher");
var anchor_tag_builder_1 = require("../../src/anchor-tag-builder");
var match_checker_1 = require("../match/match-checker");
describe("Autolinker.matcher.Hashtag", function () {
    var matcher;
    beforeEach(function () {
        matcher = new hashtag_matcher_1.HashtagMatcher({
            tagBuilder: new anchor_tag_builder_1.AnchorTagBuilder(),
            serviceName: 'twitter'
        });
    });
    describe('parseMatches()', function () {
        it('should return an empty array if there are no matches for hashtags', function () {
            expect(matcher.parseMatches('')).toEqual([]);
            expect(matcher.parseMatches('asdf')).toEqual([]);
            expect(matcher.parseMatches('asdf#asdf.com')).toEqual([]);
        });
        it('should return an array of a single hashtag match when the string is the hashtag itself', function () {
            var matches = matcher.parseMatches('#asdf');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectHashtagMatch(matches[0], 'twitter', 'asdf', 0);
        });
        it('should return an array of a single hashtag match when the hashtag is in the middle of the string', function () {
            var matches = matcher.parseMatches('Hello #asdf my good friend');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectHashtagMatch(matches[0], 'twitter', 'asdf', 6);
        });
        it('should return an array of a single hashtag match when the hashtag is at the end of the string', function () {
            var matches = matcher.parseMatches('Hello #asdf');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectHashtagMatch(matches[0], 'twitter', 'asdf', 6);
        });
        it('should return an array of multiple hashtags when there are more than one within the string', function () {
            var matches = matcher.parseMatches('Talk to #asdf or #fdsa');
            expect(matches.length).toBe(2);
            match_checker_1.MatchChecker.expectHashtagMatch(matches[0], 'twitter', 'asdf', 8);
            match_checker_1.MatchChecker.expectHashtagMatch(matches[1], 'twitter', 'fdsa', 17);
        });
        it('a match within parenthesis should be parsed correctly', function () {
            var matches = matcher.parseMatches('Hello (#asdf)');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectHashtagMatch(matches[0], 'twitter', 'asdf', 7);
        });
    });
});
