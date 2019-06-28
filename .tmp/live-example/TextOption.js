// NOTE: THIS IS A GENERATED FILE - DO NOT MODIFY AS YOUR
// CHANGES WILL BE OVERWRITTEN!!!

import * as tslib_1 from "tslib";
import { Option } from './Option';
/**
 * @class TextOption
 *
 * A text field option for the live example.
 */
var TextOption = /** @class */ (function (_super) {
    tslib_1.__extends(TextOption, _super);
    /**
     * @method constructor
     * @param {TextOptionCfg} cfg The configuration options for this class,
     *   specified in an Object (map).
     */
    function TextOption(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {Number} [size=10]
         *
         * The `size` attribute of the text field.
         */
        _this.size = 10;
        /**
         * @cfg {Boolean} [defaultValue='']
         *
         * The default value for the option.
         */
        _this.defaultValue = '';
        _this.size = cfg.size || 10;
        _this.defaultValue = cfg.defaultValue || '';
        _this.$containerEl.html(_this.generateHtml());
        _this.$textEl = _this.$containerEl.find('input').on('keyup change', _this.fireChange.bind(_this));
        _this.$valueDisplayEl = _this.$containerEl.find('#' + _this.containerId + '-value');
        return _this;
    }
    /**
     * @private
     * @return {string}
     */
    TextOption.prototype.generateHtml = function () {
        var containerId = this.containerId, optionDescription = this.optionDescription, size = this.size, defaultValue = this.defaultValue, textFieldId = containerId + '-textField';
        return "\n\t\t\t<label for=\"" + textFieldId + "\">" + optionDescription + "</label>\n\t\t\t<input type=\"text\" id=\"" + textFieldId + "\" value=\"" + defaultValue + "\" size=\"" + size + "\" class=\"textfield\">\n\t\t\t(<code>" + this.getApiDocAnchor() + "</code>)\n\t\t";
    };
    /**
     * @return {String}
     */
    TextOption.prototype.getValue = function () {
        return this.$textEl.val();
    };
    return TextOption;
}(Option));
export { TextOption };
