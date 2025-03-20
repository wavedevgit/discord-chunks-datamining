/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(372444),
  a = n(267642),
  l = n(981631),
  o = n(474936),
  A = n(388032),
  c = n(201038);

function d(e) {
  let {
    guild: t,
    numSounds: n,
    isOutOfSlots: d
  } = e, u = t.premiumTier, g = (0, a.FZ)(u, t.id), f = o._k[u] - 2;
  if (null == g || u === l.Eu4.TIER_3 || n < f) return null;
  let m = d ? {
    color: i.Ttl.GREEN,
    look: i.iLD.FILLED,
    text: A.NW.string(A.t.cYzxGh)
  } : void 0;
  return (0, r.jsx)(s.Z, {
    header: A.NW.string(A.t.zT9Sxc),
    text: A.NW.formatToPlainString(A.t.OKqEAQ, {
      level: g,
      numAdditional: (0, a.Je)(g)
    }),
    headerColor: "header-primary",
    textColor: "text-normal",
    buttonProps: m,
    guild: t,
    analyticsLocation: {
      page: l.ZY5.GUILD_SETTINGS,
      section: l.jXE.GUILD_SETTINGS_SOUNDBOARD,
      object: l.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, a.ge)(g)
    },
    className: c.container
  })
}