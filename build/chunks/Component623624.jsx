/** Chunk was on web.js **/
/** chunk id: 623624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk84615 = require("./84615.jsx"),
  Chunk70394 = require("./70394.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk443002 = require("./443002.jsx"),
  Chunk218319 = require("./218319.jsx");
let p = "BoostedGuildPerksModalConnected",
  _ = e => {
    let {
      guildId: t,
      close: n,
      location: s,
      scrollToPowerupCards: p
    } = e, _ = (0, i.e7)([u.default], () => u.default.getCurrentUser()), h = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]), {
      analyticsLocations: m
    } = (0, o.ZP)(a.Z.BOOSTED_GUILD_PERKS_MODAL), g = (0, l.$)("BoostedGuildPerksModal");
    if (null == _ || null == h) return null;
    let E = g ? f.Z : d.Z;
    return (0, r.jsx)(o.Gt, {
      value: m,
      children: (0, r.jsx)(E, {
        analyticsLocation: s,
        onClose: n,
        guild: h,
        scrollToPowerupCards: p
      })
    })
  };

function h(e) {
  let {
    guildId: t,
    location: n,
    scrollToPowerupCards: i
  } = e;
  (0, s.q4)(e => {
    let {
      closeLayer: a
    } = e;
    return (0, r.jsx)(_, {
      close: a,
      guildId: t,
      location: n,
      scrollToPowerupCards: i
    })
  }, {
    layerKey: p
  })
}