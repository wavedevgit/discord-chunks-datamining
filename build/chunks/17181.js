/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  EI: () => m,
  default: () => g,
  hz: () => v
});
var r = n(512722),
  i = n.n(r),
  o = n(481060),
  a = n(749210),
  s = n(703656),
  l = n(549817),
  c = n(745752),
  u = n(819553),
  d = n(679240),
  f = n(981631),
  p = n(176505);
let _ = {};

function h(e) {
  var t;
  null === (t = _[e]) || void 0 === t || t.call(_), _[e] = null
}

function m(e) {
  _[e] = null
}
async function g(e) {
  let {
    guildId: t,
    returnChannelId: n,
    isPreview: r = !1
  } = e;
  (0, o.pTH)(), i()(null == _[t], "should not double-join guilds");
  let l = await (0, a.V)(t);
  if (l.hasFeature(f.oNc.COMMUNITY)) {
    if (r)(0, c.I1)(t);
    else {
      if (!l.hasFeature(f.oNc.GUILD_ONBOARDING)) return;
      await (0, c.rK)(t)
    }
    u.ZP.shouldShowOnboarding(t) && (await E(t), null != n && (0, s.uL)(f.Z5c.CHANNEL(t, n)))
  }
}

function E(e) {
  return new Promise(t => {
    _[e] = t, (0, d.x)(e).then(() => {
      h(e), l.Z.finishOnboarding(e)
    }), (0, s.uL)(f.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING))
  })
}

function v(e) {
  return null != _[e]
}