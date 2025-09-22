/** Chunk was on web.js **/
/** chunk id: 35225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => c
});
var Chunk819553 = require("./819553.js"),
  Chunk931261 = require("./931261.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk944486 = require("./944486.js"),
  Chunk176505 = require("./176505.js");

function c(e) {
  var t;
  let n = s.Z.getChannelId(e),
    c = null == (t = o.ZP.getDefaultChannel(e)) ? true : t.id;
  return (n !== l.oC.GUILD_ONBOARDING || r.ZP.shouldShowOnboarding(e)) && (n !== l.oC.GUILD_HOME || (0, i.s)(e)) && null != a.Z.getChannel(n) ? n : c
}