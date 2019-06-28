"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../src/utils");
describe("Autolinker.Util", function () {
    describe('defaults()', function () {
        it('should not overwrite any properties that exist on the destination object', function () {
            var obj = utils_1.defaults({ a: 1, b: 2, c: 3 }, { a: 91, b: 92, c: 93 });
            expect(obj).toEqual({ a: 1, b: 2, c: 3 });
        });
        it('should add properties that do not exist on the destination object, without overwriting properties that do exist', function () {
            var obj = utils_1.defaults({ b: 2 }, { a: 91, b: 92, c: 93 });
            expect(obj).toEqual({ a: 91, b: 2, c: 93 });
        });
    });
    describe('splitAndCapture()', function () {
        it("should return an array with the 'split' characters included", function () {
            var result = utils_1.splitAndCapture('a,b,c', /,/g);
            expect(result).toEqual(['a', ',', 'b', ',', 'c']);
        });
        it("if a split character is found at the beginning of the string, the\n\t\t\t empty string should be the first element in the returned array to \n\t\t\t match how JS engines which support split-and-capture do it", function () {
            var result = utils_1.splitAndCapture(',a,b,c', /,/g); // equivalent of ',a,b,c'.split(/(,)/g) in newer JS engines
            expect(result).toEqual(['', ',', 'a', ',', 'b', ',', 'c']);
        });
        it("if a split character is found at the end of the string, the\n\t\t\t empty string should be the last element in the returned array to \n\t\t\t match how JS engines which support split-and-capture do it", function () {
            var result = utils_1.splitAndCapture(',a,b,', /,/g); // equivalent of ',a,b,'.split(/(,)/g) in newer JS engines
            expect(result).toEqual(['', ',', 'a', ',', 'b', ',', '']);
        });
        it("should return an array with the 'split' characters included, when there are multiple sequences of characters to split on", function () {
            var re = /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/g, result = utils_1.splitAndCapture('Joe went to yahoo.com and used HTML&nbsp;entities like &gt; and &lt; today', re);
            expect(result).toEqual(['Joe went to yahoo.com and used HTML', '&nbsp;', 'entities like ', '&gt;', ' and ', '&lt;', ' today']);
        });
    });
});
