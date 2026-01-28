/** Chunk was on 88615 **/
/** chunk id: 14081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk744201 = require("./744201.js"),
  Chunk522055 = require("./522055.js"),
  Chunk793506 = require("./793506.js"),
  Chunk204017 = require("./204017.js"),
  Chunk843095 = require("./843095.jsx"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876380 = require("./876380.js"),
  Chunk561797 = require("./561797.js");

function b(e) {
  let {
    guildId: t
  } = e, n = l.useRef(null), {
    state: i,
    lowestGameServerCost: b
  } = (0, a.cf)([m.A], () => ({
    state: m.A.getStateForGuild(t),
    lowestGameServerCost: m.A.getLowestGameCostForGuild(t)
  })), j = (0, f.A)(t), {
    gameName: E,
    gameName2: w
  } = (0, v.A)(), {
    textColor: y
  } = (0, p.A)((null == j ? true : j.type) === "active");
  return null == i ? null : (0, r.jsxs)(c.NI, {
    label: _.intl.string(A.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == j ? true : j.type) === "active",
    isWarning: (null == j ? true : j.type) === "expiring",
    onClick: () => (0, g.A)({
      guildId: t,
      analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsx)("div", {
      className: o()(h.ZS, x.Sl),
      children: (0, r.jsx)(s.E_w, {
        withReducedMotion: "halt",
        eventTargetRef: n,
        className: h.Sl,
        fit: "contain",
        stateMachine: "SM_Main_Int"
      })
    }), (0, r.jsx)(c.Ft, {
      title: _.intl.string(A.default["B3OfL/"]),
      textColor: y,
      footer: (0, r.jsx)(c.$L, {
        cost: null != b ? b : 0,
        costDecorator: "+",
        status: j
      }),
      children: (0, r.jsx)(s.EYj, {
        className: x.h_,
        color: y,
        variant: "text-sm/medium",
        children: _.intl.format(A.default["+UqyGU"], {
          gameName: E,
          gameName2: w
        })
      })
    }), (0, r.jsx)(c.kd, {
      children: (0, r.jsx)(u.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(i.entitlements).length > 0 ? _.intl.string(A.default.PuvU5b) : _.intl.string(A.default.b62EHM),
        onClick: e => {
          e.stopPropagation(), (0, g.A)({
            guildId: t,
            analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}