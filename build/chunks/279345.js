/** Chunk was on web.js **/
/** chunk id: 279345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk629821 = require("./629821.js");
class i extends Chunk629821._ {
  primaryPrefix() {
    return "(?:(?:[\xe0a])\\s*)?"
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|[\xe0a]|\\?)\\s*"
  }
  extractPrimaryTimeComponents(e, t) {
    return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t)
  }
}