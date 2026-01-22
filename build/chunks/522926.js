/** Chunk was on web.js **/
/** chunk id: 522926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk985971 = require("./985971.js");
class i extends Chunk985971.B {
  primaryPrefix() {
    return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?"
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:l)?|\\?)\\s*"
  }
}