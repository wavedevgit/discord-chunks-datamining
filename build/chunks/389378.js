/** Chunk was on web.js **/
/** chunk id: 389378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk985971 = require("./985971.js");
class i extends Chunk985971.B {
  primaryPrefix() {
    return "(?:(?:om)\\s*)?"
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|om|\\?)\\s*"
  }
  primarySuffix() {
    return "(?:\\s*(?:uur))?(?!/)(?=\\W|$)"
  }
  extractPrimaryTimeComponents(e, t) {
    return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t)
  }
}