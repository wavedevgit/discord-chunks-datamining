/** Chunk was on web.js **/
/** chunk id: 746706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk547568 = require("./547568.js"),
  Chunk896237 = require("./896237.js"),
  Chunk448085 = require("./448085.js");

function b(e) {
  switch (e) {
    case p.NJ8.DARK:
    case p.NJ8.DARKER:
    case p.NJ8.MIDNIGHT:
      return g;
    case p.NJ8.LIGHT:
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
  } = e, E = (0, o.Ay)(), {
    analyticsLocations: y
  } = (0, c.Ay)(l.A.PREMIUM_UPSELL_OVERLAY);
  return (i.useEffect(() => {
    n && d.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
      location_stack: y,
      type: _.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
    })
  }, [n, y]), n) ? (0, r.jsxs)("div", {
    className: m.ry,
    children: [(0, r.jsx)("div", {
      children: g
    }), (0, r.jsxs)("div", {
      className: m.Wc,
      children: [(0, r.jsx)("img", {
        className: m.Tn,
        alt: h.intl.string(h.t.LHFZQy),
        src: b(E)
      }), (0, r.jsxs)("div", {
        className: m._9,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          children: h.intl.string(h.t.dMaDFX)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: h.intl.string(h.t.F7sgFH)
        })]
      }), (0, r.jsx)(u.A, {
        size: a.$n.Sizes.LARGE,
        color: a.$n.Colors.GREEN,
        textOptions: {
          textOverride: f.Ay.isPremium(t) ? h.intl.string(h.t.AfRWI8) : h.intl.string(h.t.nkdUym)
        },
        subscriptionTier: _.pe.TIER_2
      })]
    })]
  }) : g
}