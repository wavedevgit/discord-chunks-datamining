/** Chunk was on 29679 **/
/** chunk id: 803305, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk372444 = require("./372444.jsx"),
  Chunk892803 = require("./892803.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284601 = require("./284601.js");

function g(e) {
  let {
    guild: t,
    numSounds: n,
    isOutOfSlots: g
  } = e, m = t.premiumTier, p = (0, s.FZ)(m), f = c._k[m] - 2, {
    enabled: h
  } = a.Z.useConfig({
    location: "GuildSettingsSoundboardBoostingUpsell"
  });
  if (null == p || m === o.Eu4.TIER_3 || n < f) return null;
  let b = g ? {
    color: i.Tt.GREEN,
    look: i.iL.FILLED,
    text: d.intl.string(d.t.cYzxGn)
  } : true;
  return (0, r.jsx)(l.Z, {
    header: d.intl.string(d.t.zT9SxY),
    text: d.intl.formatToPlainString(d.t.OKqEAU, {
      level: p,
      numAdditional: (0, s.Je)(p)
    }),
    headerColor: "header-primary",
    textColor: "text-default",
    buttonProps: b,
    useExpressiveButton: h,
    guild: t,
    analyticsLocation: {
      page: o.ZY5.GUILD_SETTINGS,
      section: o.jXE.GUILD_SETTINGS_SOUNDBOARD,
      object: o.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, s.ge)(p)
    },
    className: u.container
  })
}