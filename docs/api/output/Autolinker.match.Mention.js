Ext.data.JsonP.Autolinker_match_Mention({"tagname":"class","name":"Autolinker.match.Mention","autodetected":{},"files":[{"filename":"mention-match.js","href":"mention-match.html#Autolinker-match-Mention"}],"extends":"Autolinker.match.Match","members":[{"name":"matchedText","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-matchedText","meta":{"required":true}},{"name":"mention","tagname":"cfg","owner":"Autolinker.match.Mention","id":"cfg-mention","meta":{"required":true}},{"name":"offset","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-offset","meta":{"required":true}},{"name":"serviceName","tagname":"cfg","owner":"Autolinker.match.Mention","id":"cfg-serviceName","meta":{}},{"name":"tagBuilder","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-tagBuilder","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Mention","id":"method-constructor","meta":{}},{"name":"buildTag","tagname":"method","owner":"Autolinker.match.Match","id":"method-buildTag","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Mention","id":"method-getAnchorHref","meta":{}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Mention","id":"method-getAnchorText","meta":{}},{"name":"getCssClassSuffixes","tagname":"method","owner":"Autolinker.match.Mention","id":"method-getCssClassSuffixes","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getMention","tagname":"method","owner":"Autolinker.match.Mention","id":"method-getMention","meta":{}},{"name":"getOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-getOffset","meta":{}},{"name":"getServiceName","tagname":"method","owner":"Autolinker.match.Mention","id":"method-getServiceName","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Mention","id":"method-getType","meta":{}},{"name":"setOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-setOffset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Mention","short_doc":"Represents a Mention match found in an input string which should be Autolinked. ...","component":false,"superclasses":["Autolinker.match.Match"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='docClass'>Autolinker.match.Match</a><div class='subclass '><strong>Autolinker.match.Mention</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/mention-match.html#Autolinker-match-Mention' target='_blank'>mention-match.js</a></div></pre><div class='doc-contents'><p>Represents a Mention match found in an input string which should be Autolinked.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>) for more details.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-matchedText' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-cfg-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The original text that was matched by the Autolinker.matcher.Matcher. ...</div><div class='long'><p>The original text that was matched by the <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a>.</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='cfg-mention' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-cfg-mention' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-cfg-mention' class='name expandable'>mention</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The Mention that was matched, without the '@' character. ...</div><div class='long'><p>The Mention that was matched, without the '@' character.</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='cfg-offset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-offset' class='name expandable'>offset</a> : Number<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The offset of where the match was made in the input string. ...</div><div class='long'><p>The offset of where the match was made in the input string.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-tagBuilder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-cfg-tagBuilder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-tagBuilder' class='name expandable'>tagBuilder</a> : <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a><span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>Reference to the AnchorTagBuilder instance to use to generate an anchor\ntag for the Match.</p>\n</div><div class='long'><p>Reference to the AnchorTagBuilder instance to use to generate an anchor\ntag for the Match.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional config options</h3><div id='cfg-serviceName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-cfg-serviceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-cfg-serviceName' class='name expandable'>serviceName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The service to point mention matches to. ...</div><div class='long'><p>The service to point mention matches to. See <a href=\"#!/api/Autolinker-cfg-mention\" rel=\"Autolinker-cfg-mention\" class=\"docClass\">Autolinker.mention</a>\nfor available values.</p>\n<p>Defaults to: <code>&#39;twitter&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Mention-method-constructor' class='name expandable'>Autolinker.match.Mention</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Mention\" rel=\"Autolinker.match.Mention\" class=\"docClass\">Autolinker.match.Mention</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match\n  instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Mention\" rel=\"Autolinker.match.Mention\" class=\"docClass\">Autolinker.match.Mention</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-constructor\" rel=\"Autolinker.match.Match-method-constructor\" class=\"docClass\">Autolinker.match.Match.constructor</a></p></div></div></div><div id='method-buildTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-buildTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-buildTag' class='name expandable'>buildTag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds and returns an Autolinker.HtmlTag instance based on the\nMatch. ...</div><div class='long'><p>Builds and returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance based on the\nMatch.</p>\n\n<p>This can be used to easily generate anchor tags from matches, and either\nreturn their HTML string, or modify them before doing so.</p>\n\n<p>Example Usage:</p>\n\n<pre><code>var tag = match.buildTag();\ntag.addClass( 'cordova-link' );\ntag.setAttr( 'target', '_system' );\n\ntag.toAnchorString();  // &lt;a href=\"http://google.com\" class=\"cordova-link\" target=\"_system\"&gt;Google&lt;/a&gt;\n</code></pre>\n\n<p>Example Usage in <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">Autolinker.replaceFn</a>:</p>\n\n<pre><code>var html = <a href=\"#!/api/Autolinker-method-link\" rel=\"Autolinker-method-link\" class=\"docClass\">Autolinker.link</a>( \"Test google.com\", {\n    replaceFn : function( match ) {\n        var tag = match.buildTag();  // returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance\n        tag.setAttr( 'rel', 'nofollow' );\n\n        return tag;\n    }\n} );\n\n// generated html:\n//   Test &lt;a href=\"http://google.com\" target=\"_blank\" rel=\"nofollow\"&gt;google.com&lt;/a&gt;\n</code></pre>\n</div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCssClassSuffixes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-getCssClassSuffixes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-method-getCssClassSuffixes' class='name expandable'>getCssClassSuffixes</a>( <span class='pre'></span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the CSS class suffixes that should be used on a tag built with\nthe match. ...</div><div class='long'><p>Returns the CSS class suffixes that should be used on a tag built with\nthe match. See <a href=\"#!/api/Autolinker.match.Match-method-getCssClassSuffixes\" rel=\"Autolinker.match.Match-method-getCssClassSuffixes\" class=\"docClass\">Autolinker.match.Match.getCssClassSuffixes</a> for\ndetails.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getCssClassSuffixes\" rel=\"Autolinker.match.Match-method-getCssClassSuffixes\" class=\"docClass\">Autolinker.match.Match.getCssClassSuffixes</a></p></div></div></div><div id='method-getMatchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMention' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-getMention' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-method-getMention' class='name expandable'>getMention</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the mention, without the '@' character. ...</div><div class='long'><p>Returns the mention, without the '@' character.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the offset of where the match was made in the input string. ...</div><div class='long'><p>Returns the offset of where the match was made in the input string. This\nis the 0-based index of the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getServiceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-getServiceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-method-getServiceName' class='name expandable'>getServiceName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the configured serviceName to point the mention to. ...</div><div class='long'><p>Returns the configured <a href=\"#!/api/Autolinker.match.Mention-cfg-serviceName\" rel=\"Autolinker.match.Mention-cfg-serviceName\" class=\"docClass\">serviceName</a> to point the mention to.\nEx: 'instagram', 'twitter', 'soundcloud'.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Mention'>Autolinker.match.Mention</span><br/><a href='source/mention-match.html#Autolinker-match-Mention-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Mention-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.\nFor the case of MentionMatch, returns 'mention'.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/match.html#Autolinker-match-Match-method-setOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'>offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the offset of where the match was made in the input string. ...</div><div class='long'><p>Sets the <a href=\"#!/api/Autolinker.match.Match-cfg-offset\" rel=\"Autolinker.match.Match-cfg-offset\" class=\"docClass\">offset</a> of where the match was made in the input string.</p>\n\n<p>A <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> will be fed only HTML text nodes,\nand will therefore set an original offset that is relative to the HTML\ntext node itself. However, we want this offset to be relative to the full\nHTML input string, and thus if using <a href=\"#!/api/Autolinker-method-parse\" rel=\"Autolinker-method-parse\" class=\"docClass\">Autolinker.parse</a> (rather\nthan calling a <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> directly), then this\noffset is corrected after the Matcher itself has done its job.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});