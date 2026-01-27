/** Chunk was on web.js **/
/** chunk id: 658128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u
});
var Chunk713125 = require("./713125.js"),
  Chunk473529 = require("./473529.js"),
  Chunk871123 = require("./871123.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk309010 = require("./309010.js"),
  Chunk746080 = require("./746080.js");

function u(e) {
  var t;
  let n = l.A.getChannelId(e),
    u = null == (t = s.Ay.getDefaultChannel(e)) ? true : t.id;
  return (n !== c.VV.GUILD_ONBOARDING || r.Ay.shouldShowOnboarding(e)) && (n !== c.VV.GUILD_HOME || (0, i.K)(e)) ? n === c.VV.GAME_SHOP && (0, a.Ye)(e, "getChannelIdForGuildTransition") ? n : null == o.A.getChannel(n) ? u : n : u
}