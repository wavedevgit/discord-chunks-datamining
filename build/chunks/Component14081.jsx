/** Chunk was on 88615 **/
/** chunk id: 14081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk744201 = require("./744201.js"),
  Chunk522055 = require("./522055.js"),
  Chunk793506 = require("./793506.js"),
  Chunk843095 = require("./843095.jsx"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876380 = require("./876380.js"),
  Chunk291305 = require("./291305.js"),
  Chunk561797 = require("./561797.js"),
  Chunk390175 = require("./390175.js");

function b(e) {
  let {
    guildId: t
  } = e, {
    state: n,
    lowestGameServerCost: l
  } = (0, s.cf)([p.A], () => ({
    state: p.A.getStateForGuild(t),
    lowestGameServerCost: p.A.getLowestGameCostForGuild(t)
  })), b = (0, m.A)(t), {
    textColor: j
  } = (0, c.A)((null == b ? true : b.type) === "active");
  return null == n ? null : (0, r.jsxs)(d.NI, {
    label: g.intl.string(v.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == b ? true : b.type) === "active",
    isWarning: (null == b ? true : b.type) === "expiring",
    onClick: () => (0, f.A)({
      guildId: t,
      analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: x.ZS,
      children: [(0, r.jsx)("img", {
        className: i()(_.T, A.Sl, x.Sl),
        src: h.A,
        alt: ""
      }), (0, r.jsx)("div", {
        className: i()(A.Sl, x.D7)
      })]
    }), (0, r.jsx)(d.Ft, {
      title: g.intl.string(v.default["B3OfL/"]),
      textColor: j,
      footer: (0, r.jsx)(d.$L, {
        cost: null != l ? l : 0,
        costDecorator: "+",
        status: b
      }),
      children: (0, r.jsx)(o.EYj, {
        className: A.h_,
        color: j,
        variant: "text-sm/medium",
        children: g.intl.string(v.default.EGkJAG)
      })
    }), (0, r.jsx)(d.kd, {
      children: (0, r.jsx)(a.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(n.entitlements).length > 0 ? g.intl.string(v.default.PuvU5b) : g.intl.string(v.default.b62EHM),
        onClick: e => {
          e.stopPropagation(), (0, f.A)({
            guildId: t,
            analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}