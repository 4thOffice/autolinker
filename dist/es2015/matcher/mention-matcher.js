import * as tslib_1 from "tslib";
import { Matcher } from "./matcher";
import { alphaNumericAndMarksCharsStr } from "../regex-lib";
import { MentionMatch } from "../match/mention-match";
/**
 * @class Autolinker.matcher.Mention
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find/replace username matches in an input string.
 */
var MentionMatcher = /** @class */ (function (_super) {
    tslib_1.__extends(MentionMatcher, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match instance,
     *   specified in an Object (map).
     */
    function MentionMatcher(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {'twitter'/'instagram'/'soundcloud'} protected
         *
         * The name of service to link @mentions to.
         *
         * Valid values are: 'twitter', 'instagram', or 'soundcloud'
         */
        _this.serviceName = 'twitter'; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * Hash of regular expression to match username handles. Example match:
         *
         *     @asdf
         *
         * @private
         * @property {Object} matcherRegexes
         */
        _this.matcherRegexes = {
            'twitter': new RegExp("@[_" + alphaNumericAndMarksCharsStr + "]{1,50}(?![_" + alphaNumericAndMarksCharsStr + "])", 'g'),
            'instagram': new RegExp("@[_." + alphaNumericAndMarksCharsStr + "]{1,30}(?![_" + alphaNumericAndMarksCharsStr + "])", 'g'),
            'soundcloud': new RegExp("@[-_." + alphaNumericAndMarksCharsStr + "]{1,50}(?![-_" + alphaNumericAndMarksCharsStr + "])", 'g') // lookahead used to make sure we don't match something above 50 characters
        };
        /**
         * The regular expression to use to check the character before a username match to
         * make sure we didn't accidentally match an email address.
         *
         * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
         *
         * @private
         * @property {RegExp} nonWordCharRegex
         */
        _this.nonWordCharRegex = new RegExp('[^' + alphaNumericAndMarksCharsStr + ']');
        _this.serviceName = cfg.serviceName;
        return _this;
    }
    /**
     * @inheritdoc
     */
    MentionMatcher.prototype.parseMatches = function (text) {
        var serviceName = this.serviceName, matcherRegex = this.matcherRegexes[this.serviceName], nonWordCharRegex = this.nonWordCharRegex, tagBuilder = this.tagBuilder, matches = [], match;
        if (!matcherRegex) {
            return matches;
        }
        while ((match = matcherRegex.exec(text)) !== null) {
            var offset = match.index, prevChar = text.charAt(offset - 1);
            // If we found the match at the beginning of the string, or we found the match
            // and there is a whitespace char in front of it (meaning it is not an email
            // address), then it is a username match.
            if (offset === 0 || nonWordCharRegex.test(prevChar)) {
                var matchedText = match[0].replace(/\.+$/g, ''), // strip off trailing .
                mention = matchedText.slice(1); // strip off the '@' character at the beginning
                matches.push(new MentionMatch({
                    tagBuilder: tagBuilder,
                    matchedText: matchedText,
                    offset: offset,
                    serviceName: serviceName,
                    mention: mention
                }));
            }
        }
        return matches;
    };
    return MentionMatcher;
}(Matcher));
export { MentionMatcher };

//# sourceMappingURL=mention-matcher.js.map
