// NOTE: THIS IS A GENERATED FILE - DO NOT MODIFY AS YOUR
// CHANGES WILL BE OVERWRITTEN!!!

import * as tslib_1 from "tslib";
import { Option } from './Option';
/**
 * @class CheckboxOption
 *
 * A checkbox option for the live example.
 */
var CheckboxOption = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxOption, _super);
    /**
     * @method constructor
     * @param {CheckboxOptionCfg} cfg The configuration options for this
     *   class, specified in an Object (map).
     */
    function CheckboxOption(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {Boolean} [defaultValue=false]
         *
         * `true` to check the checkbox by default.
         */
        _this.defaultValue = false;
        _this.defaultValue = cfg.defaultValue || false;
        _this.$containerEl.html(_this.generateHtml());
        _this.$checkboxEl = _this.$containerEl.find(':checkbox').on('change', _this.updateDisplayEl.bind(_this));
        _this.$valueDisplayEl = _this.$containerEl.find('#' + _this.containerId + '-value');
        return _this;
    }
    /**
     * @private
     * @return {string}
     */
    CheckboxOption.prototype.generateHtml = function () {
        var containerId = this.containerId, optionDescription = this.optionDescription, defaultValue = this.defaultValue, checkboxId = containerId + '-checkbox';
        return "\n\t\t\t<input type=\"checkbox\" id=\"" + checkboxId + "\" " + (defaultValue ? 'checked' : '') + ">\n\t\t\t<label for=\"" + checkboxId + "\">" + optionDescription + "</label>\n\t\t\t(<code>" + this.getApiDocAnchor() + ": <span id=\"" + containerId + "-value\">" + defaultValue + "</span></code>)\n\t\t";
    };
    /**
     * @private
     */
    CheckboxOption.prototype.updateDisplayEl = function () {
        this.$valueDisplayEl.html(this.getValue() + '');
        this.fireChange();
    };
    /**
     * @return {Boolean}
     */
    CheckboxOption.prototype.getValue = function () {
        return this.$checkboxEl.prop('checked');
    };
    return CheckboxOption;
}(Option));
export { CheckboxOption };
