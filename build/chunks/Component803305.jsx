/** Chunk was on 9536 **/
/** chunk id: 803305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk372444 = require("./372444.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk177745 = require("./177745.js");

function u(e) {
  let {
    guild: t,
    numSounds: n,
    isOutOfSlots: u
  } = e, g = t.premiumTier, m = (0, a.FZ)(g), f = o._k[g] - 2;
  if (null == m || g === s.Eu4.TIER_3 || n < f) return null;
  let p = u ? {
    color: i.Tt.GREEN,
    look: i.iL.FILLED,
    text: c.intl.string(c.t.cYzxGn)
  } : true;
  return (0, r.jsx)(l.Z, {
    header: c.intl.string(c.t.zT9SxY),
    text: c.intl.formatToPlainString(c.t.OKqEAU, {
      level: m,
      numAdditional: (0, a.Je)(m)
    }),
    headerColor: "header-primary",
    textColor: "text-default",
    buttonProps: p,
    useExpressiveButton: true,
    guild: t,
    analyticsLocation: {
      page: s.ZY5.GUILD_SETTINGS,
      section: s.jXE.GUILD_SETTINGS_SOUNDBOARD,
      object: s.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, a.ge)(m)
    },
    className: d.container
  })
}