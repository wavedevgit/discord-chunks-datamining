/** Chunk was on 47841 **/
/** chunk id: 619842, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk945086 = require("./945086.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk914016 = require("./914016.js");

function u(e) {
  let {
    guild: t,
    numSounds: n,
    isOutOfSlots: u
  } = e, f = t.premiumTier, g = (0, s.ax)(f), b = c.y7[f] - 2;
  if (null == g || f === a.TVA.TIER_3 || n < b) return null;
  let m = u ? {
    color: i.XD.GREEN,
    look: i.pR.FILLED,
    text: o.intl.string(o.t.cYzxGn)
  } : true;
  return (0, r.jsx)(l.A, {
    header: o.intl.string(o.t.zT9SxY),
    text: o.intl.formatToPlainString(o.t.OKqEAU, {
      level: g,
      numAdditional: (0, s.Ry)(g)
    }),
    headerColor: "text-strong",
    textColor: "text-default",
    buttonProps: m,
    useExpressiveButton: true,
    guild: t,
    analyticsLocation: {
      page: a.liQ.GUILD_SETTINGS,
      section: a.JJy.GUILD_SETTINGS_SOUNDBOARD,
      object: a.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, s.k1)(g)
    },
    className: d.k
  })
}