/** Chunk was on web.js **/
/** chunk id: 623624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk84615 = require("./84615.jsx"),
  Chunk70394 = require("./70394.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk443002 = require("./443002.jsx"),
  Chunk564394 = require("./564394.jsx");
let m = "BoostedGuildPerksModalConnected",
  h = e => {
    let {
      guildId: t,
      close: n,
      location: i
    } = e, c = (0, a.e7)([f.default], () => f.default.getCurrentUser());
    o()(null != c, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
    let m = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]),
      {
        analyticsLocations: h
      } = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL),
      g = (0, u.$)("BoostedGuildPerksModal");
    if (null == m) return null;
    let E = g ? _.Z : p.Z;
    return (0, r.jsx)(l.Gt, {
      value: h,
      children: (0, r.jsx)(E, {
        analyticsLocation: i,
        onClose: n,
        guild: m
      })
    })
  };

function g(e) {
  let {
    guildId: t,
    location: n
  } = e;
  (0, c.q4)(e => {
    let {
      closeLayer: i
    } = e;
    return (0, r.jsx)(h, {
      close: i,
      guildId: t,
      location: n
    })
  }, {
    layerKey: m
  })
}