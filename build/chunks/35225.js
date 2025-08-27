/** Chunk was on web.js **/
/** chunk id: 35225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => u
});
var Chunk265153 = require("./265153.js"),
  Chunk819553 = require("./819553.js"),
  Chunk931261 = require("./931261.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk944486 = require("./944486.js"),
  Chunk176505 = require("./176505.js");

function u(e) {
  var t;
  let n = l.Z.getChannelId(e),
    u = null == (t = s.ZP.getDefaultChannel(e)) ? true : t.id,
    {
      enabled: d
    } = r.Z.getCurrentConfig({
      guildId: e,
      location: "getChannelIdForGuildTransition"
    }, {
      autoTrackExposure: false
    });
  return (n !== c.oC.GUILD_ONBOARDING || i.ZP.shouldShowOnboarding(e)) && (n !== c.oC.GUILD_HOME || (0, a.s)(e)) ? null == o.Z.getChannel(n) ? u : n : u
}