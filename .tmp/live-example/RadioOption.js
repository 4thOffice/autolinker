// NOTE: THIS IS A GENERATED FILE - DO NOT MODIFY AS YOUR
// CHANGES WILL BE OVERWRITTEN!!!

import * as tslib_1 from "tslib";
import { Option } from './Option';
/**
 * @class RadioOption
 *
 * A radio option for the live example.
 */
var RadioOption = /** @class */ (function (_super) {
    tslib_1.__extends(RadioOption, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration options for this class, specified
     *   in an Object (map).
     */
    function RadioOption(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {*} [defaultValue=false]
         *
         * The value in {@link #options} to select by default.
         */
        _this.defaultValue = false;
        _this.options = [].concat(cfg.options);
        _this.defaultValue = cfg.defaultValue || false;
        _this.$containerEl.html(_this.generateHtml());
        _this.$valueDisplayEl = _this.$containerEl.find('#' + _this.containerId + '-value');
        _this.$containerEl
            .find(':radio').on('change', _this.updateDisplayEl.bind(_this));
        return _this;
    }
    /**
     * @private
     * @return {string}
     */
    RadioOption.prototype.generateHtml = function () {
        var containerId = this.containerId, optionDescription = this.optionDescription, defaultValue = this.defaultValue, radiosHtml = this.createRadiosHtml(this.options, defaultValue);
        return "\n\t\t\t<label>" + optionDescription + ": </label>\n\t\t\t(<code>" + this.getApiDocAnchor() + ": <span id=\"" + containerId + "-value\">" + this.formatValueForDisplay(defaultValue) + "</span></code>)\n\t\t\t<div class=\"pl10\">" + radiosHtml.join('<br>') + "</div>\n\t\t";
    };
    /**
     * Creates an array of '<input type="radio">' HTML tags.
     *
     * @private
     * @param {Array} options
     * @param {*} defaultValue
     * @return {String[]}
     */
    RadioOption.prototype.createRadiosHtml = function (options, defaultValue) {
        var _this = this;
        return options.map(function (option, idx) {
            return "\n\t\t\t\t<input type=\"radio\" id=\"" + _this.containerId + "-radio-" + option + "\" name=\"" + _this.containerId + "-radio\" data-option-idx=\"" + idx + "\" " + (option === _this.defaultValue ? 'checked' : '') + "> \n\t\t\t\t<label for=\"" + _this.containerId + "-radio-" + option + "\">" + option + "</label>\n\t\t\t";
        });
    };
    /**
     * @private
     */
    RadioOption.prototype.updateDisplayEl = function () {
        var displayValue = this.formatValueForDisplay(this.getValue());
        this.$valueDisplayEl.html(displayValue);
        this.fireChange();
    };
    /**
     * @return {Boolean}
     */
    RadioOption.prototype.getValue = function () {
        var optionIdx = this.$containerEl.find(':radio:checked').data('option-idx');
        return this.options[optionIdx];
    };
    /**
     * Formats an option value for display.
     *
     * Strings are surrounded with quotes, booleans and numbers are returned
     * as strings as-is.
     *
     * @param {*} value
     */
    RadioOption.prototype.formatValueForDisplay = function (value) {
        return (typeof value === 'string') ? "'" + value + "'" : (value + '');
    };
    return RadioOption;
}(Option));
export { RadioOption };
