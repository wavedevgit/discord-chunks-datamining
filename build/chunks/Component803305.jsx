/** Chunk was on 29679 **/
/** chunk id: 803305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk372444 = require("./372444.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284601 = require("./284601.js");

function u(e) {
  let {
    guild: t,
    numSounds: n,
    isOutOfSlots: u
  } = e, g = t.premiumTier, m = (0, s.FZ)(g), p = o._k[g] - 2;
  if (null == m || g === a.Eu4.TIER_3 || n < p) return null;
  let f = u ? {
    color: i.Tt.GREEN,
    look: i.iL.FILLED,
    text: c.intl.string(c.t.cYzxGh)
  } : true;
  return (0, r.jsx)(l.Z, {
    header: c.intl.string(c.t.zT9Sxc),
    text: c.intl.formatToPlainString(c.t.OKqEAQ, {
      level: m,
      numAdditional: (0, s.Je)(m)
    }),
    headerColor: "header-primary",
    textColor: "text-default",
    buttonProps: f,
    guild: t,
    analyticsLocation: {
      page: a.ZY5.GUILD_SETTINGS,
      section: a.jXE.GUILD_SETTINGS_SOUNDBOARD,
      object: a.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, s.ge)(m)
    },
    className: d.container
  })
}