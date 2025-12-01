/** Chunk was on web.js **/
/** chunk id: 17181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EI: () => h,
  default: () => g,
  hz: () => b
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk703656 = require("./703656.js"),
  Chunk549817 = require("./549817.js"),
  Chunk745752 = require("./745752.js"),
  Chunk819553 = require("./819553.js"),
  Chunk679240 = require("./679240.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
let _ = {};

function m(e) {
  var t;
  null == (t = _[e]) || t.call(_), _[e] = null
}

function h(e) {
  _[e] = null
}
async function g(e) {
  let {
    guildId: t,
    returnChannelId: n,
    isPreview: r = false
  } = e;
  (0, a.pTH)(), i()(null == _[t], "should not double-join guilds");
  let l = await (0, o.V)(t);
  if (l.features.has(f.GuildFeatures.COMMUNITY)) {
    if (r)(0, c.I1)(t);
    else {
      if (!l.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return;
      await (0, c.rK)(t)
    }
    u.ZP.shouldShowOnboarding(t) && (await E(t), null != n && (0, s.uL)(f.Z5c.CHANNEL(t, n)))
  }
}

function E(e) {
  return new Promise(t => {
    _[e] = t, (0, d.x)(e).then(() => {
      m(e), l.Z.finishOnboarding(e)
    }), (0, s.uL)(f.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING))
  })
}

function b(e) {
  return null != _[e]
}