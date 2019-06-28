"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var autolinker_1 = tslib_1.__importDefault(require("autolinker"));
describe('test Autolinker with TypeScript in Node', function () {
    it('should run using the AutolinkerConfig interface import', function () {
        var options = { newWindow: false }; // Note: Testing that the AutolinkerConfig interface can be imported
        var linkedStr = autolinker_1.default.link('Go to google.com', options);
        expect(linkedStr).toBe("Go to <a href=\"http://google.com\">google.com</a>");
    });
});
