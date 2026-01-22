/** Chunk was on web.js **/
/** chunk id: 563690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk985971 = require("./985971.js");
class i extends Chunk985971.B {
  primaryPrefix() {
    return "(?:(?:ao?|\xe0s?|das|da|de|do)\\s*)?"
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*"
  }
}