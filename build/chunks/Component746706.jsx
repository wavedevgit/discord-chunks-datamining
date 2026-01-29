/** Chunk was on 2827 **/
/** chunk id: 746706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    user: t,
    showOverlay: n,
    children: h
  } = e, E = (0, a.Ay)(), {
    analyticsLocations: O
  } = (0, c.Ay)(o.A.PREMIUM_UPSELL_OVERLAY);
  return (i.useEffect(() => {
    n && u.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, {
      location_stack: O,
      type: m.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
    })
  }, [n, O]), n) ? (0, r.jsxs)("div", {
    className: A.ry,
    children: [(0, r.jsx)("div", {
      children: h
    }), (0, r.jsxs)("div", {
      className: A.Wc,
      children: [(0, r.jsx)("img", {
        className: A.Tn,
        alt: g.intl.string(g.t.LHFZQy),
        src: function(e) {
          switch (e) {
            case p.NJ8.DARK:
            case p.NJ8.DARKER:
            case p.NJ8.MIDNIGHT:
              return f;
            case p.NJ8.LIGHT:
              return b;
            default:
              return f
          }
        }(E)
      }), (0, r.jsxs)("div", {
        className: A._9,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-lg/semibold",
          color: "always-white",
          children: g.intl.string(g.t.dMaDFX)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: g.intl.string(g.t.F7sgFH)
        })]
      }), (0, r.jsx)(d.A, {
        size: l.$n.Sizes.LARGE,
        color: l.$n.Colors.GREEN,
        textOptions: {
          textOverride: _.Ay.isPremium(t) ? g.intl.string(g.t.AfRWI8) : g.intl.string(g.t.nkdUym)
        },
        subscriptionTier: m.pe.TIER_2
      })]
    })]
  }) : h
}