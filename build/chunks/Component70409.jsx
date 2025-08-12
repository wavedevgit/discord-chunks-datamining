/** Chunk was on 5533 **/
/** chunk id: 70409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk372444 = require("./372444.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk93864 = require("./93864.js");

function u(e) {
  let {
    guild: t,
    numSounds: n,
    isOutOfSlots: u
  } = e, m = t.premiumTier, g = (0, a.FZ)(m), p = o._k[m] - 2;
  if (null == g || m === s.Eu4.TIER_3 || n < p) return null;
  let h = u ? {
    color: i.Tt.GREEN,
    look: i.iL.FILLED,
    text: c.intl.string(c.t.cYzxGh)
  } : true;
  return (0, r.jsx)(l.Z, {
    header: c.intl.string(c.t.zT9Sxc),
    text: c.intl.formatToPlainString(c.t.OKqEAQ, {
      level: g,
      numAdditional: (0, a.Je)(g)
    }),
    headerColor: "header-primary",
    textColor: "text-default",
    buttonProps: h,
    guild: t,
    analyticsLocation: {
      page: s.ZY5.GUILD_SETTINGS,
      section: s.jXE.GUILD_SETTINGS_SOUNDBOARD,
      object: s.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, a.ge)(g)
    },
    className: d.container
  })
}