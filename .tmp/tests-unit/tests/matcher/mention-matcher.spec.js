"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mention_matcher_1 = require("../../src/matcher/mention-matcher");
var anchor_tag_builder_1 = require("../../src/anchor-tag-builder");
var match_checker_1 = require("../match/match-checker");
describe("Autolinker.matcher.Mention", function () {
    var matcher;
    beforeEach(function () {
        matcher = new mention_matcher_1.MentionMatcher({
            tagBuilder: new anchor_tag_builder_1.AnchorTagBuilder(),
            serviceName: 'twitter'
        });
    });
    describe('parseMatches()', function () {
        it('should return an empty array if there are no matches for usernames', function () {
            expect(matcher.parseMatches('')).toEqual([]);
            expect(matcher.parseMatches('asdf')).toEqual([]);
            expect(matcher.parseMatches('asdf@asdf.com')).toEqual([]); // an email address is not a username
            expect(matcher.parseMatches('stuff@asdf')).toEqual([]); // using an '@' symbol as part of a word is not a username
        });
        it('should return an array of a single username match when the string is the username itself', function () {
            var matches = matcher.parseMatches('@asdf');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'twitter', 'asdf', 0);
        });
        it('should return an array of a single username match when the username is in the middle of the string', function () {
            var matches = matcher.parseMatches('Hello @asdf my good friend');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'twitter', 'asdf', 6);
        });
        it('should return an array of a single username match when the username is at the end of the string', function () {
            var matches = matcher.parseMatches('Hello @asdf');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'twitter', 'asdf', 6);
        });
        it('should return an array of multiple usernames when there are more than one within the string', function () {
            var matches = matcher.parseMatches('Talk to @asdf or @fdsa');
            expect(matches.length).toBe(2);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'twitter', 'asdf', 8);
            match_checker_1.MatchChecker.expectMentionMatch(matches[1], 'twitter', 'fdsa', 17);
        });
        it('a match within parenthesis should be parsed correctly', function () {
            var matches = matcher.parseMatches('Hello (@asdf)');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'twitter', 'asdf', 7);
        });
        it('an Instagram username with period not at boundaries should be parsed correctly', function () {
            var instagramMatcher = new mention_matcher_1.MentionMatcher({
                tagBuilder: new anchor_tag_builder_1.AnchorTagBuilder(),
                serviceName: 'instagram'
            });
            var matches = instagramMatcher.parseMatches('Hello (@as.df)');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'instagram', 'as.df', 7);
        });
        it('an Instagram username with period at end of string should ignore period', function () {
            var instagramMatcher = new mention_matcher_1.MentionMatcher({
                tagBuilder: new anchor_tag_builder_1.AnchorTagBuilder(),
                serviceName: 'instagram'
            });
            var matches = instagramMatcher.parseMatches('Hello (@asdf.)');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'instagram', 'asdf', 7);
        });
        it('an soundcloud username with dashes not at boundaries should be parsed correctly', function () {
            var soundcloudMatcher = new mention_matcher_1.MentionMatcher({
                tagBuilder: new anchor_tag_builder_1.AnchorTagBuilder(),
                serviceName: 'soundcloud'
            });
            var matches = soundcloudMatcher.parseMatches('Hello (@as-df)');
            expect(matches.length).toBe(1);
            match_checker_1.MatchChecker.expectMentionMatch(matches[0], 'soundcloud', 'as-df', 7);
        });
    });
});
