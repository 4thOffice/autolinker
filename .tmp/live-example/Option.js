// NOTE: THIS IS A GENERATED FILE - DO NOT MODIFY AS YOUR
// CHANGES WILL BE OVERWRITTEN!!!

/**
 * @abstract
 * @class Option
 *
 * Base class for options that can be modified in the live example.
 */
var Option = /** @class */ (function () {
    /**
     * @method constructor
     * @param {OptionCfg} cfg The configuration options for this class,
     *   specified in an Object (map).
     */
    function Option(cfg) {
        this.optionName = cfg.name;
        this.optionDescription = cfg.description;
        this.containerId = 'option-' + this.optionName.replace(/\./g, '-'); // ex: 'truncate.length' -> 'trunctate-length'
        this.$containerEl = $('#' + this.containerId);
        this.changeCallbacks = [];
    }
    /**
     * @protected
     * @return {String}
     */
    Option.prototype.getApiDocAnchor = function () {
        return "<a href=\"" + this.getApiDocLink() + "\" target=\"autolinkerDocs\">" + this.optionName + "</a>";
    };
    /**
     * @protected
     * @return {String}
     */
    Option.prototype.getApiDocLink = function () {
        var configName = this.optionName.match(/[^.]+/)[0]; // ex: 'urls.schemeMatches' -> 'urls'
        return "http://gregjacobs.github.io/Autolinker.js/api/#!/api/Autolinker-cfg-" + configName;
    };
    /**
     * Registers a callback to call when the option is changed.
     *
     * @param {Function} callbackFn
     * @chainable
     */
    Option.prototype.onChange = function (callbackFn) {
        this.changeCallbacks.push(callbackFn);
        return this;
    };
    /**
     * Calls all 'change' callbacks as a result of the option being changed.
     *
     * @protected
     */
    Option.prototype.fireChange = function () {
        this.changeCallbacks.forEach(function (cb) { return cb(); }); // call all 'change' callbacks
    };
    return Option;
}());
export { Option };
