"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var autolinker_1 = tslib_1.__importDefault(require("../src/autolinker"));
describe("Autolinker Hashtag Matching -", function () {
    var autolinker = new autolinker_1.default({ newWindow: false });
    var twitterAutolinker = new autolinker_1.default({ hashtag: 'twitter', newWindow: false });
    var facebookAutolinker = new autolinker_1.default({ hashtag: 'facebook', newWindow: false });
    var instagramAutolinker = new autolinker_1.default({ hashtag: 'instagram', newWindow: false });
    var services = [
        { serviceName: 'twitter', urlPrefix: 'https://twitter.com/hashtag', autolinker: twitterAutolinker },
        { serviceName: 'instagram', urlPrefix: 'https://instagram.com/explore/tags', autolinker: instagramAutolinker },
        { serviceName: 'facebook', urlPrefix: 'https://www.facebook.com/hashtag', autolinker: facebookAutolinker },
    ];
    it("should NOT autolink hashtags by default for both backward compatibility, \n\t\t and because we don't know which service (twitter, facebook, etc.) to \n\t\t point them to", function () {
        expect(autolinker.link("#test")).toBe("#test");
    });
    it("should NOT autolink hashtags the 'hashtag' cfg is explicitly false", function () {
        var result = autolinker_1.default.link("#test", { hashtag: false });
        expect(result).toBe("#test");
    });
    describe('all services hashtag tests', function () {
        services.forEach(function (_a) {
            var serviceName = _a.serviceName, urlPrefix = _a.urlPrefix, autolinker = _a.autolinker;
            it("should automatically link hashtags to " + serviceName + " when the \n\t\t\t\t 'hashtag' option is '" + serviceName + "'", function () {
                var result = autolinker.link("#test");
                expect(result).toBe("<a href=\"" + urlPrefix + "/test\">#test</a>");
            });
            it("should automatically link hashtags which are part of a full \n\t\t\t\t string when using the " + serviceName + " service", function () {
                var result = autolinker.link("my hashtag is #test these days");
                expect(result).toBe("my hashtag is <a href=\"" + urlPrefix + "/test\">#test</a> these days");
            });
            it("should link a hashtag that is up to 139 characters long when \n\t\t\t\t using the " + serviceName + " service", function () {
                var aHashtag = lodash_1.default.repeat('a', 139);
                var bHashtag = lodash_1.default.repeat('b', 140); // too long - don't link
                var result = autolinker.link("#" + aHashtag + " and #" + bHashtag);
                expect(result).toBe("<a href=\"" + urlPrefix + "/" + aHashtag + "\">#" + aHashtag + "</a> and #" + bHashtag);
            });
            it("should automatically link a hashtag with underscores when using\n\t\t\t\t the " + serviceName + " service", function () {
                var result = autolinker.link("Yay, #hello_world");
                expect(result).toBe("Yay, <a href=\"" + urlPrefix + "/hello_world\">#hello_world</a>");
            });
            it("should automatically link a hashtag with accented characters \n\t\t\t\t when using the " + serviceName + " service", function () {
                var result = autolinker.link("Yay, #ma\u00F1ana");
                expect(result).toBe("Yay, <a href=\"" + urlPrefix + "/ma\u00F1ana\">#ma\u00F1ana</a>");
            });
            it("should automatically link a hashtag with cyrillic characters\n\t\t\t\t when using the " + serviceName + " service", function () {
                var result = autolinker.link("Yay, #\u041A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430");
                expect(result).toBe("Yay, <a href=\"" + urlPrefix + "/\u041A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430\">#\u041A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430</a>");
            });
            it("should NOT automatically link a hashtag when the '#' belongs to \n\t\t\t\t part of another string when using the " + serviceName + " service", function () {
                var result = autolinker.link("test as#df test");
                expect(result).toBe("test as#df test");
            });
            it("should NOT automatically link a hashtag that is actually a \n\t\t\t\t named anchor within a URL when using the " + serviceName + " service", function () {
                var result = autolinker.link("http://google.com/#link");
                expect(result).toBe("<a href=\"http://google.com/#link\">google.com/#link</a>");
            });
            it("should NOT automatically link a hashtag that is actually a \n\t\t\t\t named anchor within a URL **when URL linking is turned off** \n\t\t\t\t when using the " + serviceName + " service", function () {
                var noUrlTwitterHashtagAutolinker = new autolinker_1.default({
                    urls: false,
                    hashtag: 'twitter',
                    newWindow: false
                });
                var result = noUrlTwitterHashtagAutolinker.link("http://google.com/#link");
                expect(result).toBe("http://google.com/#link");
            });
        });
    });
});
