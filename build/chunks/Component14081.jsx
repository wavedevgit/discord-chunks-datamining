/** Chunk was on 88615 **/
/** chunk id: 14081, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => j
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

function j(e) {
  let {
    guildId: t
  } = e, {
    state: l,
    lowestGameServerCost: n
  } = (0, o.cf)([f.A], () => ({
    state: f.A.getStateForGuild(t),
    lowestGameServerCost: f.A.getLowestGameCostForGuild(t)
  })), j = (0, p.A)(t), {
    textColor: _
  } = (0, c.A)((null == j ? true : j.type) === "active");
  return null == l ? null : (0, r.jsxs)(d.NI, {
    label: A.intl.string(v.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == j ? true : j.type) === "active",
    isWarning: (null == j ? true : j.type) === "expiring",
    onClick: () => (0, m.A)({
      guildId: t,
      analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: b.ZS,
      children: [(0, r.jsx)("img", {
        className: i()(x.T, g.Sl, b.Sl),
        src: h.A,
        alt: ""
      }), (0, r.jsx)("div", {
        className: i()(g.Sl, b.D7)
      })]
    }), (0, r.jsx)(d.Ft, {
      title: A.intl.string(v.default["B3OfL/"]),
      textColor: _,
      footer: (0, r.jsx)(d.$L, {
        cost: null != n ? n : 0,
        costDecorator: "+",
        status: j
      }),
      children: (0, r.jsx)(s.EYj, {
        className: g.h_,
        color: _,
        variant: "text-sm/medium",
        children: A.intl.string(v.default.EGkJAG)
      })
    }), (0, r.jsx)(d.kd, {
      children: (0, r.jsx)(a.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(l.entitlements).length > 0 ? A.intl.string(v.default.PuvU5b) : A.intl.string(v.default.b62EHM),
        onClick: e => {
          e.stopPropagation(), (0, m.A)({
            guildId: t,
            analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}