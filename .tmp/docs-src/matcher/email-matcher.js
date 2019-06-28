"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var matcher_1 = require("./matcher");
var regex_lib_1 = require("../regex-lib");
var email_match_1 = require("../match/email-match");
var utils_1 = require("../utils");
// For debugging: search for other "For debugging" lines
// import CliTable from 'cli-table';
/**
 * @class Autolinker.matcher.Email
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find email matches in an input string.
 *
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
 */
var EmailMatcher =  (function (_super) {
    tslib_1.__extends(EmailMatcher, _super);
    function EmailMatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Valid characters that can be used in the "local" part of an email address,
         * i.e. the "name" part of "name@site.com"
         */
        _this.localPartCharRegex = new RegExp("[" + regex_lib_1.alphaNumericAndMarksCharsStr + "!#$%&'*+/=?^_`{|}~-]");
        /**
         * Valid URI scheme for email address URLs
         */
        _this.mailToScheme = 'mailto:';
        return _this;
    }
    /**
     * @inheritdoc
     */
    EmailMatcher.prototype.parseMatches = function (text) {
        var tagBuilder = this.tagBuilder, localPartCharRegex = this.localPartCharRegex, mailToScheme = this.mailToScheme, matches = [], len = text.length, noCurrentEmailAddress = new CurrentEmailAddress();
        var charIdx = 0, state = 0 /* NonEmailAddress */, currentEmailAddress = noCurrentEmailAddress;
        // For debugging: search for other "For debugging" lines
        // const table = new CliTable( {
        // 	head: [ 'charIdx', 'char', 'state', 'charIdx', 'currentEmailAddress.idx', 'hasDomainDot' ]
        // } );
        while (charIdx < len) {
            var char = text.charAt(charIdx);
            // For debugging: search for other "For debugging" lines
            // table.push( 
            // 	[ charIdx, char, State[ state ], charIdx, currentEmailAddress.idx, currentEmailAddress.hasDomainDot ] 
            // );
            switch (state) {
                case 0 /* NonEmailAddress */:
                    stateNonEmailAddress(char);
                    break;
                case 1 /* LocalPart */:
                    stateLocalPart(char);
                    break;
                case 2 /* LocalPartDot */:
                    stateLocalPartDot(char);
                    break;
                case 3 /* AtSign */:
                    stateAtSign(char);
                    break;
                case 4 /* DomainChar */:
                    stateDomainChar(char);
                    break;
                case 5 /* DomainHyphen */:
                    stateDomainHyphen(char);
                    break;
                case 6 /* DomainDot */:
                    stateDomainDot(char);
                    break;
                default:
                    utils_1.throwUnhandledCaseError(state);
            }
            // For debugging: search for other "For debugging" lines
            // table.push( 
            // 	[ charIdx, char, State[ state ], charIdx, currentEmailAddress.idx, currentEmailAddress.hasDomainDot ] 
            // );
            charIdx++;
        }
        // Capture any valid match at the end of the string
        captureMatchIfValidAndReset();
        // For debugging: search for other "For debugging" lines
        //console.log( '\n' + table.toString() );
        return matches;
        // Handles the state when we're not in an email address
        function stateNonEmailAddress(char) {
            if (localPartCharRegex.test(char)) {
                beginEmailAddress();
            }
            else {
                // not an email address character, continue
            }
        }
        // Handles the state when we're currently in the "local part" of an 
        // email address (as opposed to the "domain part")
        function stateLocalPart(char) {
            if (char === '.') {
                state = 2 /* LocalPartDot */;
            }
            else if (char === '@') {
                state = 3 /* AtSign */;
            }
            else if (localPartCharRegex.test(char)) {
                // stay in the "local part" of the email address
            }
            else {
                // not an email address character, return to "NonEmailAddress" state
                resetToNonEmailAddressState();
            }
        }
        // Handles the state where we've read 
        function stateLocalPartDot(char) {
            if (char === '.') {
                // We read a second '.' in a row, not a valid email address 
                // local part
                resetToNonEmailAddressState();
            }
            else if (char === '@') {
                // We read the '@' character immediately after a dot ('.'), not 
                // an email address
                resetToNonEmailAddressState();
            }
            else if (localPartCharRegex.test(char)) {
                state = 1 /* LocalPart */;
            }
            else {
                // Anything else, not an email address
                resetToNonEmailAddressState();
            }
        }
        function stateAtSign(char) {
            if (regex_lib_1.domainNameCharRegex.test(char)) {
                state = 4 /* DomainChar */;
            }
            else {
                // Anything else, not an email address
                resetToNonEmailAddressState();
            }
        }
        function stateDomainChar(char) {
            if (char === '.') {
                state = 6 /* DomainDot */;
            }
            else if (char === '-') {
                state = 5 /* DomainHyphen */;
            }
            else if (regex_lib_1.domainNameCharRegex.test(char)) {
                // Stay in the DomainChar state
            }
            else {
                // Anything else, we potentially matched if the criteria has
                // been met
                captureMatchIfValidAndReset();
            }
        }
        function stateDomainHyphen(char) {
            if (char === '-' || char === '.') {
                // Not valid to have two hyphens ("--") or hypen+dot ("-.")
                captureMatchIfValidAndReset();
            }
            else if (regex_lib_1.domainNameCharRegex.test(char)) {
                state = 4 /* DomainChar */;
            }
            else {
                // Anything else
                captureMatchIfValidAndReset();
            }
        }
        function stateDomainDot(char) {
            if (char === '.' || char === '-') {
                // not valid to have two dots ("..") or dot+hypen (".-")
                captureMatchIfValidAndReset();
            }
            else if (regex_lib_1.domainNameCharRegex.test(char)) {
                state = 4 /* DomainChar */;
                // After having read a '.' and then a valid domain character,
                // we now know that the domain part of the email is valid, and
                // we have found at least a partial EmailMatch (however, the
                // email address may have additional characters from this point)
                currentEmailAddress = new CurrentEmailAddress(tslib_1.__assign({}, currentEmailAddress, { hasDomainDot: true }));
            }
            else {
                // Anything else
                captureMatchIfValidAndReset();
            }
        }
        function beginEmailAddress() {
            state = 1 /* LocalPart */;
            currentEmailAddress = new CurrentEmailAddress({ idx: charIdx });
        }
        function resetToNonEmailAddressState() {
            state = 0 /* NonEmailAddress */;
            currentEmailAddress = noCurrentEmailAddress;
        }
        /*
         * Captures the current email address as an EmailMatch if it's valid,
         * and resets the state to read another email address.
         */
        function captureMatchIfValidAndReset() {
            if (currentEmailAddress.hasDomainDot) { // we need at least one dot in the domain to be considered a valid email address
                var offset = currentEmailAddress.idx;
                var emailAddress = text.slice(offset, charIdx);
                // If we read a '.' or '-' char that ended the email address
                // (valid domain name characters, but only valid email address
                // characters if they are followed by something else), strip 
                // it off now
                if (/[-.]$/.test(emailAddress)) {
                    emailAddress = emailAddress.slice(0, -1);
                }
                var matchedText = emailAddress;
                // get the characters immediately preceding the email match
                var potentialMailToSchemeOffset = offset - mailToScheme.length;
                var potentialMailToScheme = text.slice(potentialMailToSchemeOffset, offset);
                if (potentialMailToScheme === mailToScheme) {
                    // if the email match is preceded by the 'mailTo:' scheme, 
                    // include those characters in the matched text
                    offset = potentialMailToSchemeOffset;
                    matchedText = text.slice(offset, charIdx);
                }
                matches.push(new email_match_1.EmailMatch({
                    tagBuilder: tagBuilder,
                    matchedText: matchedText,
                    offset: offset,
                    email: emailAddress
                }));
            }
            resetToNonEmailAddressState();
        }
    };
    return EmailMatcher;
}(matcher_1.Matcher));
exports.EmailMatcher = EmailMatcher;
var CurrentEmailAddress =  (function () {
    function CurrentEmailAddress(cfg) {
        if (cfg === void 0) { cfg = {}; }
        this.idx = cfg.idx !== undefined ? cfg.idx : -1;
        this.hasDomainDot = !!cfg.hasDomainDot;
    }
    return CurrentEmailAddress;
}());

//# sourceMappingURL=email-matcher.js.map
