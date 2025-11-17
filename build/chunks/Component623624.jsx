/** Chunk was on web.js **/
/** chunk id: 623624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk84615 = require("./84615.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk443002 = require("./443002.jsx");
let _ = "BoostedGuildPerksModalConnected",
  p = e => {
    let {
      guildId: t,
      close: n,
      location: i
    } = e, c = (0, o.e7)([d.default], () => d.default.getCurrentUser());
    a()(null != c, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
    let _ = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]),
      {
        analyticsLocations: p
      } = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL);
    return null == _ ? null : (0, r.jsx)(l.Gt, {
      value: p,
      children: (0, r.jsx)(f.Z, {
        analyticsLocation: i,
        onClose: n,
        guild: _
      })
    })
  };

function h(e) {
  let {
    guildId: t,
    location: n
  } = e;
  (0, c.q4)(e => {
    let {
      closeLayer: i
    } = e;
    return (0, r.jsx)(p, {
      close: i,
      guildId: t,
      location: n
    })
  }, {
    layerKey: _
  })
}