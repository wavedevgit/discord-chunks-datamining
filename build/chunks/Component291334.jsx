/** Chunk was on web.js **/
/** chunk id: 291334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk985576 = require("./985576.js"),
  Chunk699623 = require("./699623.js"),
  Chunk820350 = require("./820350.js");

function b(e) {
  switch (e) {
    case p.BRd.DARK:
    case p.BRd.DARKER:
    case p.BRd.MIDNIGHT:
      return g;
    case p.BRd.LIGHT:
      return E;
    default:
      return g
  }
}

function y(e) {
  let {
    user: t,
    showOverlay: n,
    children: g
  } = e, E = (0, s.ZP)(), {
    analyticsLocations: y
  } = (0, c.ZP)(l.Z.PREMIUM_UPSELL_OVERLAY);
  return (i.useEffect(() => {
    n && d.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
      location_stack: y,
      type: _.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
    })
  }, [n, y]), n) ? (0, r.jsxs)("div", {
    className: h.upsellOverlayContainer,
    children: [(0, r.jsx)("div", {
      children: g
    }), (0, r.jsxs)("div", {
      className: h.upsellOverlay,
      children: [(0, r.jsx)("img", {
        className: h.upsellImage,
        alt: m.intl.string(m.t.LHFZQy),
        src: b(E)
      }), (0, r.jsxs)("div", {
        className: h.upsellTextContainer,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          children: m.intl.string(m.t.dMaDFX)
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: m.intl.string(m.t.F7sgFH)
        })]
      }), (0, r.jsx)(u.Z, {
        size: a.zx.Sizes.LARGE,
        color: a.zx.Colors.GREEN,
        textOptions: {
          textOverride: f.ZP.isPremium(t) ? m.intl.string(m.t.AfRWI8) : m.intl.string(m.t.nkdUym)
        },
        subscriptionTier: _.Si.TIER_2
      })]
    })]
  }) : g
}