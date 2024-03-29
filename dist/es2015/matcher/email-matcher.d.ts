import { Matcher } from "./matcher";
import { Match } from "../match/match";
/**
 * @class Autolinker.matcher.Email
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find email matches in an input string.
 *
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
 */
export declare class EmailMatcher extends Matcher {
    /**
     * Valid characters that can be used in the "local" part of an email address,
     * i.e. the "name" part of "name@site.com"
     */
    protected localPartCharRegex: RegExp;
    /**
     * Valid URI scheme for email address URLs
     */
    protected mailToScheme: string;
    /**
     * @inheritdoc
     */
    parseMatches(text: string): Match[];
}
