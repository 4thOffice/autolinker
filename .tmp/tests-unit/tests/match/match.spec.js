"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var anchor_tag_builder_1 = require("../../src/anchor-tag-builder");
var match_1 = require("../../src/match/match");
describe("Autolinker.match.Match", function () {
    var tagBuilder = new anchor_tag_builder_1.AnchorTagBuilder();
    var ConcreteMatch = /** @class */ (function (_super) {
        tslib_1.__extends(ConcreteMatch, _super);
        function ConcreteMatch() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConcreteMatch.prototype.getType = function () { return 'concrete-match'; };
        ConcreteMatch.prototype.getAnchorHref = function () { return this.matchedText + '_href'; };
        ConcreteMatch.prototype.getAnchorText = function () { return this.matchedText + '_text'; };
        return ConcreteMatch;
    }(match_1.Match));
    describe('getMatchedText()', function () {
        it("should return the configured `matchedText` if it was an empty string", function () {
            var match = new ConcreteMatch({ tagBuilder: tagBuilder, matchedText: '', offset: 0 });
            expect(match.getMatchedText()).toBe('');
        });
        it("should return the configured `matchedText` if it was a string other than an empty string", function () {
            var match = new ConcreteMatch({ tagBuilder: tagBuilder, matchedText: 'abc', offset: 2 });
            expect(match.getMatchedText()).toBe('abc');
        });
    });
    describe('getOffset()', function () {
        it("should return the configured `offset` if it was 0", function () {
            var match = new ConcreteMatch({ tagBuilder: tagBuilder, matchedText: 'abc', offset: 0 });
            expect(match.getOffset()).toBe(0);
        });
        it("should return the configured `offset` if it was a number other than 0", function () {
            var match = new ConcreteMatch({ tagBuilder: tagBuilder, matchedText: 'abc', offset: 2 });
            expect(match.getOffset()).toBe(2);
        });
    });
    describe('buildTag()', function () {
        it("should return an Autolinker.HtmlTag instance, configured for how the Match is configured", function () {
            var match = new ConcreteMatch({ tagBuilder: tagBuilder, matchedText: 'abc', offset: 0 }), htmlTag = match.buildTag();
            expect(htmlTag.toAnchorString()).toBe('<a href="abc_href">abc_text</a>');
        });
    });
});
