/** Chunk was on web.js **/
/** chunk id: 967305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ih: () => y,
  Jg: () => m,
  default: () => g
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk976860 = require("./976860.js"),
  Chunk669953 = require("./669953.js"),
  Chunk817818 = require("./817818.js"),
  Chunk713125 = require("./713125.js"),
  Chunk263594 = require("./263594.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
let _ = {};

function h(e) {
  var t;
  null == (t = _[e]) || t.call(_), _[e] = null
}

function m(e) {
  _[e] = null
}
async function g(e) {
  let {
    guildId: t,
    returnChannelId: n,
    isPreview: r = false
  } = e;
  (0, a.s7G)(), i()(null == _[t], "should not double-join guilds");
  let l = await (0, s.k)(t);
  if (l.features.has(f.GuildFeatures.COMMUNITY)) {
    if (r)(0, c.sy)(t);
    else {
      if (!l.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return;
      await (0, c.h9)(t)
    }
    u.Ay.shouldShowOnboarding(t) && (await E(t), null != n && (0, o.pX)(f.BVt.CHANNEL(t, n)))
  }
}

function E(e) {
  return new Promise(t => {
    _[e] = t, (0, d.Y)(e).then(() => {
      h(e), l.A.finishOnboarding(e)
    }), (0, o.pX)(f.BVt.CHANNEL(e, p.VV.GUILD_ONBOARDING))
  })
}

function y(e) {
  return null != _[e]
}