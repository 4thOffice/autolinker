"use strict";
// WARNING: This file is modified a bit when it is compiled into index.js in 
// order to support nodejs interoperability with require('autolinker') directly. 
// This is done by the buildSrcFixCommonJsIndexTask() function in the gulpfile. 
// See that function for more details.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var autolinker_1 = require("./autolinker");
exports.default = autolinker_1.default;
var autolinker_2 = require("./autolinker");
exports.Autolinker = autolinker_2.default;
tslib_1.__exportStar(require("./autolinker"), exports);
tslib_1.__exportStar(require("./anchor-tag-builder"), exports);
tslib_1.__exportStar(require("./html-tag"), exports);
tslib_1.__exportStar(require("./match/index"), exports);
tslib_1.__exportStar(require("./matcher/index"), exports);
