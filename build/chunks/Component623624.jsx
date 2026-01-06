/** Chunk was on web.js **/
/** chunk id: 623624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
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
      location: s
    } = e, p = (0, i.e7)([u.default], () => u.default.getCurrentUser()), _ = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]), {
      analyticsLocations: m
    } = (0, o.ZP)(a.Z.BOOSTED_GUILD_PERKS_MODAL), h = (0, l.$)("BoostedGuildPerksModal");
    if (null == p || null == _) return null;
    let g = h ? f.Z : d.Z;
    return (0, r.jsx)(o.Gt, {
      value: m,
      children: (0, r.jsx)(g, {
        analyticsLocation: s,
        onClose: n,
        guild: _
      })
    })
  };

function m(e) {
  let {
    guildId: t,
    location: n
  } = e;
  (0, s.q4)(e => {
    let {
      closeLayer: i
    } = e;
    return (0, r.jsx)(_, {
      close: i,
      guildId: t,
      location: n
    })
  }, {
    layerKey: p
  })
}