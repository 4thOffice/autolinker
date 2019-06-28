"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var autolinker_1 = tslib_1.__importDefault(require("../src/autolinker"));
describe("Autolinker Mention Matching -", function () {
    var twitterAutolinker = new autolinker_1.default({ mention: 'twitter', newWindow: false });
    var instagramAutolinker = new autolinker_1.default({ mention: 'instagram', newWindow: false });
    var soundcloudAutolinker = new autolinker_1.default({ mention: 'soundcloud', newWindow: false });
    var services = [
        { serviceName: 'twitter', urlPrefix: 'https://twitter.com', autolinker: twitterAutolinker },
        { serviceName: 'instagram', urlPrefix: 'https://instagram.com', autolinker: instagramAutolinker },
        { serviceName: 'soundcloud', urlPrefix: 'https://soundcloud.com', autolinker: soundcloudAutolinker },
    ];
    it("should not autolink mentions by default", function () {
        var autolinker = new autolinker_1.default({ newWindow: false });
        expect(autolinker.link("@test")).toBe('@test');
    });
    describe('all services mention tests', function () {
        services.forEach(function (_a) {
            var serviceName = _a.serviceName, urlPrefix = _a.urlPrefix, autolinker = _a.autolinker;
            it("should automatically link a " + serviceName + " handle which is the \n\t\t\t\t only thing in the string\n\t\t\t", function () {
                var result = autolinker.link("@joe");
                expect(result).toBe("<a href=\"" + urlPrefix + "/joe\">@joe</a>");
            });
            it("should automatically link a " + serviceName + " handle with underscores \n\t\t\t\t in it", function () {
                var result = autolinker.link("@joe_the_man12");
                expect(result).toBe("<a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a>");
            });
            it("should automatically link " + serviceName + " handles at the \n\t\t\t\t beginning of a string", function () {
                var result = autolinker.link("@greg is my " + serviceName + " handle");
                expect(result).toBe("<a href=\"" + urlPrefix + "/greg\">@greg</a> is my " + serviceName + " handle");
            });
            it("should automatically link " + serviceName + " handles in the middle \n\t\t\t\t of a string", function () {
                var result = autolinker.link("Joe's " + serviceName + " is @joe_the_man12 today, but what will it be tomorrow?");
                expect(result).toBe("Joe's " + serviceName + " is <a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a> today, but what will it be tomorrow?");
            });
            it("should automatically link " + serviceName + " handles at the end of \n\t\t\t\t a string", function () {
                var result = autolinker.link("Joe's " + serviceName + " is @joe_the_man12");
                expect(result).toBe("Joe's " + serviceName + " is <a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a>");
            });
            it("should automatically link " + serviceName + " handles at the end of \n\t\t\t\t a string with a period at the end", function () {
                var result = autolinker.link("Joe's " + serviceName + " is @joe_the_man12.");
                expect(result).toBe("Joe's " + serviceName + " is <a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a>.");
            });
            it("should automatically link " + serviceName + " handles surrounded by \n\t\t\t\t parentheses", function () {
                var result = autolinker.link("Joe's " + serviceName + " is (@joe_the_man12)");
                expect(result).toBe("Joe's " + serviceName + " is (<a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a>)");
            });
            it("should automatically link " + serviceName + " handles surrounded by \n\t\t\t     curly brackets", function () {
                var result = autolinker.link("Joe's " + serviceName + " is {@joe_the_man12}");
                expect(result).toBe("Joe's " + serviceName + " is {<a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a>}");
            });
            it("should automatically link " + serviceName + " handles surrounded by \n\t\t\t\t square brackets", function () {
                var result = autolinker.link("Joe's " + serviceName + " is [@joe_the_man12]");
                expect(result).toBe("Joe's " + serviceName + " is [<a href=\"" + urlPrefix + "/joe_the_man12\">@joe_the_man12</a>]");
            });
            it("should automatically link multiple " + serviceName + " handles in a \n\t\t\t\t string", function () {
                var result = autolinker.link("@greg is tweeting @joe with @josh");
                expect(result).toBe("<a href=\"" + urlPrefix + "/greg\">@greg</a> is tweeting <a href=\"" + urlPrefix + "/joe\">@joe</a> with <a href=\"" + urlPrefix + "/josh\">@josh</a>");
            });
            it("should automatically link fully capitalized " + serviceName + " handles", function () {
                var result = autolinker.link("@GREG is tweeting @JOE with @JOSH");
                expect(result).toBe("<a href=\"" + urlPrefix + "/GREG\">@GREG</a> is tweeting <a href=\"" + urlPrefix + "/JOE\">@JOE</a> with <a href=\"" + urlPrefix + "/JOSH\">@JOSH</a>");
            });
            // NOTE: Twitter itself does not accept accented characters, but
            // other services might so linking them anyway
            it("should automatically link username handles with accented \n\t\t\t\t characters for " + serviceName, function () {
                var result = autolinker.link("Hello @ma\u00F1ana how are you?");
                expect(result).toBe("Hello <a href=\"" + urlPrefix + "/ma\u00F1ana\">@ma\u00F1ana</a> how are you?");
            });
            // NOTE: Twitter itself does not accept cyrillic characters, but
            // other services might so linking them anyway
            it("should automatically link username handles with cyrillic \n\t\t\t\t characters for service " + serviceName + "\n\t\t\t", function () {
                var result = autolinker.link("Hello @\u041A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430 how are you?");
                expect(result).toBe("Hello <a href=\"" + urlPrefix + "/\u041A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430\">@\u041A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430</a> how are you?");
            });
            it("should NOT automatically link a mention when the '@' belongs to \n\t\t\t\t part of another string", function () {
                var result = autolinker.link("test as@df test");
                expect(result).toBe("test as@df test");
            });
        });
    });
    describe('twitter-specific tests', function () {
        it('should link a twitter mention that is up to 50 characters long', function () {
            var aUsername = lodash_1.default.repeat('a', 50);
            var bUsername = lodash_1.default.repeat('b', 51); // too long - don't link
            var result = twitterAutolinker.link("@" + aUsername + " and @" + bUsername);
            expect(result).toBe("<a href=\"https://twitter.com/" + aUsername + "\">@" + aUsername + "</a> and @" + bUsername);
        });
        it("should link a twitter mention that has a period in it only up until\n\t\t\t the period", function () {
            var result = twitterAutolinker.link("Hello @asdf.defg");
            expect(result).toBe("Hello <a href=\"https://twitter.com/asdf\">@asdf</a>.defg");
        });
    });
    describe('instagram-specific tests', function () {
        it('should link an instagram mention that is up to 30 characters long', function () {
            var aUsername = lodash_1.default.repeat('a', 30);
            var bUsername = lodash_1.default.repeat('b', 31); // too long - don't link
            var result = instagramAutolinker.link("@" + aUsername + " and @" + bUsername);
            expect(result).toBe("<a href=\"https://instagram.com/" + aUsername + "\">@" + aUsername + "</a> and @" + bUsername);
        });
        it("should link an instagram mention that has a period in it", function () {
            var result = instagramAutolinker.link("Hello @asdf.defg");
            expect(result).toBe("Hello <a href=\"https://instagram.com/asdf.defg\">@asdf.defg</a>");
        });
    });
    describe('soundcloud-specific tests', function () {
        it('should link a soundcloud mention that is up to 50 characters long', function () {
            var aUsername = lodash_1.default.repeat('a', 50);
            var bUsername = lodash_1.default.repeat('b', 51); // too long - don't link
            var result = soundcloudAutolinker.link("@" + aUsername + " and @" + bUsername);
            expect(result).toBe("<a href=\"https://soundcloud.com/" + aUsername + "\">@" + aUsername + "</a> and @" + bUsername);
        });
        it("should link a soundcloud mention that has a period in it", function () {
            var result = soundcloudAutolinker.link("Hello @asdf.defg");
            expect(result).toBe("Hello <a href=\"https://soundcloud.com/asdf.defg\">@asdf.defg</a>");
        });
    });
    it("should NOT automatically link a username that is actually part of an \n\t\t email address when email address linking is turned on\n\t", function () {
        var emailAutolinker = new autolinker_1.default({
            email: true,
            mention: 'twitter',
            newWindow: false
        });
        var result = emailAutolinker.link("asdf@asdf.com");
        expect(result).toBe('<a href="mailto:asdf@asdf.com">asdf@asdf.com</a>');
    });
    it("should NOT automatically link a username that is actually part of an \n\t\t email address when email address linking is turned *off*\n\t", function () {
        var noEmailAutolinker = new autolinker_1.default({
            email: false,
            mention: 'twitter',
            newWindow: false
        });
        var result = noEmailAutolinker.link("asdf@asdf.com");
        expect(result).toBe('asdf@asdf.com');
    });
});
