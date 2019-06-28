"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_1 = tslib_1.__importDefault(require("fs"));
describe('Live example page -', function () {
    var _this = this;
    // @types/puppeteer causing a lot of conflicts with @types/node. Removing for now.
    //import puppeteer, { Browser, Page } from 'puppeteer';
    var puppeteer = require('puppeteer');
    var browser; // :Browser
    var page; // :Page
    beforeAll(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({ headless: true })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    // Print errors from the page
                    page.on('console', function (msg) { return console.log('PAGE LOG:', msg.text()); });
                    page.on('pageerror', function (err) { return console.error(err); });
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, browser.close()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should correctly load Autolinker and display the output with the default settings', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var pathToHtmlFile, autolinkerOutputHtml;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pathToHtmlFile = path_1.default.normalize(__dirname + "/../../../docs/examples/index.html");
                    if (!fs_1.default.existsSync(pathToHtmlFile)) {
                        throw new Error("The live example index.html file was not found at path: '" + pathToHtmlFile + "'\nDid the location of the file (or the output location of this .spec file) change? The file should be referenced from the root-level './docs/examples' folder in the repo");
                    }
                    return [4 /*yield*/, page.goto("file://" + pathToHtmlFile, { waitUntil: 'load' })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            return document.querySelector('#output').innerHTML.trim();
                        })];
                case 2:
                    autolinkerOutputHtml = _a.sent();
                    expect(autolinkerOutputHtml).toBe([
                        "<a href=\"http://google.com\" target=\"_blank\" rel=\"noopener noreferrer\">google.com</a><br>",
                        "<a href=\"http://www.google.com\" target=\"_blank\" rel=\"noopener noreferrer\">google.com</a><br>",
                        "<a href=\"http://google.com\" target=\"_blank\" rel=\"noopener noreferrer\">google.com</a><br>",
                        "<a href=\"mailto:google@google.com\" target=\"_blank\" rel=\"noopener noreferrer\">google@google.com</a><br>",
                        "<a href=\"tel:1234567890\" target=\"_blank\" rel=\"noopener noreferrer\">123-456-7890</a><br>",
                        "@MentionUser<br>",
                        "#HashTag"
                    ].join(''));
                    return [2 /*return*/];
            }
        });
    }); });
});
