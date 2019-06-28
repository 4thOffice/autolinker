"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_match_1 = require("../../src/match/url-match");
var mention_match_1 = require("../../src/match/mention-match");
var phone_match_1 = require("../../src/match/phone-match");
var hashtag_match_1 = require("../../src/match/hashtag-match");
var email_match_1 = require("../../src/match/email-match");
var MatchChecker = /** @class */ (function () {
    function MatchChecker() {
    }
    /**
     * Expects an {@link Autolinker.match.Email Email} match.
     *
     * @param {Autolinker.match.Email} match The Match object to check.
     * @param {String} email The email address to expect.
     * @param {Number} offset The offset for the match in the original string to
     *   expect.
     */
    MatchChecker.expectEmailMatch = function (match, email, offset) {
        this.expectMatchType(match, 'email');
        expect(match.getEmail()).toBe(email);
        expect(match.getOffset()).toBe(offset);
    };
    /**
     * Expects a {@link Autolinker.match.Hashtag HashtagMatch} match.
     *
     * @param {Autolinker.match.Hashtag} match The Match object to check.
     * @param {String} serviceName The service name to expect of where to direct
     *   clicks to the hashtag to. Ex: 'facebook', 'twitter'.
     * @param {String} hashtag The hashtag to expect, without the prefixed '#'
     *   character.
     * @param {Number} offset The offset for the match in the original string to
     *   expect.
     */
    MatchChecker.expectHashtagMatch = function (match, serviceName, hashtag, offset) {
        this.expectMatchType(match, 'hashtag');
        expect(match.getServiceName()).toBe(serviceName);
        expect(match.getHashtag()).toBe(hashtag);
        expect(match.getOffset()).toBe(offset);
    };
    /**
     * Expects a {@link Autolinker.match.Phone Phone} match.
     *
     * @param {Autolinker.match.Phone} match The Match object to check.
     * @param {String} number The phone number to expect, without any delimiter
     *   characters, and without a prefixed '+' character.
     * @param {Number} offset The offset for the match in the original string to
     *   expect.
     */
    MatchChecker.expectPhoneMatch = function (match, number, offset) {
        this.expectMatchType(match, 'phone');
        expect(match.getNumber()).toBe(number);
        expect(match.getOffset()).toBe(offset);
    };
    /**
     * Expects a {@link Autolinker.match.Mention Mention} match.
     *
     * @param {Autolinker.match.Mention} match The Match object to check.
     * @param {String} serviceName The service name to expect of where to direct
     *   clicks to the mention to. Ex: 'twitter', 'instagram'.
     * @param {String} mention The mention to expect, without the
     *   prefixed '@' character.
     * @param {Number} offset The offset for the match in the original string to
     *   expect.
     */
    MatchChecker.expectMentionMatch = function (match, serviceName, mention, offset) {
        this.expectMatchType(match, 'mention');
        expect(match.getServiceName()).toBe(serviceName);
        expect(match.getMention()).toBe(mention);
        expect(match.getOffset()).toBe(offset);
    };
    /**
     * Expects a {@link Autolinker.match.Url Url} match.
     *
     * @param {Autolinker.match.Url} match The Match object to check.
     * @param {String} url The URL to expect, with the URI scheme prepended.
     * @param {Number} offset The offset for the match in the original string to
     *   expect.
     */
    MatchChecker.expectUrlMatch = function (match, url, offset) {
        this.expectMatchType(match, 'url');
        expect(match.getUrl()).toBe(url);
        expect(match.getOffset()).toBe(offset);
    };
    // ---------------------------------------
    /**
     * Private utility method used to check the type of the `match` object
     * provided, and throws if it does not match the provided `typeName`.
     *
     * @param {Autolinker.match.Match} match The Match object to check against
     *   the provided `typeName`.
     * @param {String} typeName The name of the Match subclass. Ex: 'Email',
     *   'Twitter', 'Url', etc.
     * @throws {Error} If the `match` is not an instance of the `typeName`.
     */
    MatchChecker.expectMatchType = function (match, typeName) {
        switch (typeName) {
            case 'email':
                if (!(match instanceof email_match_1.EmailMatch)) {
                    throw new Error('Expected an EmailMatch object');
                }
                break;
            case 'hashtag':
                if (!(match instanceof hashtag_match_1.HashtagMatch)) {
                    throw new Error('Expected a HashtagMatch object');
                }
                break;
            case 'phone':
                if (!(match instanceof phone_match_1.PhoneMatch)) {
                    throw new Error('Expected a PhoneMatch object');
                }
                break;
            case 'mention':
                if (!(match instanceof mention_match_1.MentionMatch)) {
                    throw new Error('Expected a MentionMatch object');
                }
                break;
            case 'url':
                if (!(match instanceof url_match_1.UrlMatch)) {
                    throw new Error('Expected a UrlMatch object');
                }
                break;
            default:
                throw new Error("Unknown typeName: " + typeName);
        }
    };
    return MatchChecker;
}());
exports.MatchChecker = MatchChecker;
